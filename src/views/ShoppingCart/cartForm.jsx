import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from "@mui/system";

const DivForm = styled("div")(({ theme }) => ({
  width: "30%",
}));

const DivLabel = styled("div")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "4px",
  marginBottom: "8px",
}));

const InputStyled = styled("input")(({ theme }) => ({
  height: "30px",
}));

const ButtonSubmit = styled("button")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  marginTop: "10px",
  fontSize: "18px",
  padding: "11px",
  color: "white",
  background: "black",
  width: "55%",
  "&:hover": {
    color: "black",
    background: "white",
  },
}));

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email().required(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <DivForm onSubmit={handleSubmit(onSubmit)}>
      <DivLabel>
        <label>First Name</label>
        <InputStyled {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </DivLabel>

      <DivLabel>
        <label>Last Name</label>
        <InputStyled {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </DivLabel>

      <DivLabel>
        <label>Age</label>
        <InputStyled
          type="number"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </DivLabel>

      <DivLabel>
        <label>Email</label>
        <InputStyled {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </DivLabel>

      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </DivForm>
  );
};

export default Form;
