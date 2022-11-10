import { CartStyled, MainContainer, ItemTotal } from "./CartStyled";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import { Context } from "../../context/customContext";
import { useContext } from "react";
import { Form, TitleFinalize, FormStyle } from "./cartForm";
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
});

const Cart = () => {
  const { cart, total, clearCart } = useContext(Context);

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const sale = async () => {
    const user = getValues();
    const salesCollection = collection(db, "sales");
    const result = await addDoc(salesCollection, {
      user,
      items: cart,
      total: total,
      date: serverTimestamp(),
    });
    Swal.fire({
      icon: "success",
      title: "Great! Thanks for choosing us.",
      text: `Your order ID is: ${result.id}`,
      showConfirmButton: true,
      confirmButtonText: "Copy id to clipboard",
    }).then((action) => {
      if (action.isConfirmed) {
        navigator.clipboard.writeText(result.id).then(() => {
          console.log("copy");
        });
      }
    });

    clearCart();
  };

  const updateStock = () => {
    Promise.all([
      ...cart.map((item) => {
        const update = doc(db, "products", item.id);
        return updateDoc(update, { stock: item.stock - item.quantity });
      }),
    ]);
  };

  const finalizeShopping = () => {
    const user = getValues();
    if (!cart.length) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There's nothing in the cart",
      });

      return;
    }
    if (user.address && user.firstName && user.lastName && user.email) {
      sale();
      updateStock();
      reset();

      return;
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter your valid information.",
    });
  };

  return (
    <MainContainer>
      <FormStyle>
        <TitleFinalize>Please enter your info to finalize</TitleFinalize>
        <Form
          register={register}
          errors={errors}
          onSubmit={finalizeShopping}
          handleSubmit={handleSubmit}
        />
      </FormStyle>
      <ItemTotal>
        {cart.map((product) => (
          <CartStyled key={product.id} product={product}></CartStyled>
        ))}
        <h3 style={{ marginTop: "10px" }}>{`Total: $${Math.round(total).toFixed(
          3
        )} `}</h3>
        <DeleteIcon onClick={() => clearCart(cart)} />
      </ItemTotal>
    </MainContainer>
  );
};
export default Cart;
