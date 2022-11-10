import React from "react";

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
  fontSize: "17px",
  padding: "10px",
  color: "white",
  background: "black",
  width: "100%",
  "&:hover": {
    color: "black",
    background: "white",
  },
}));

const Form = ({ register, errors, onSubmit }) => {
  return (
    <DivForm>
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
        <label>Address</label>
        <InputStyled {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </DivLabel>

      <DivLabel>
        <label>Email</label>
        <InputStyled {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </DivLabel>

      <ButtonSubmit type="submit" onClick={onSubmit}>
        Finalize shopping
      </ButtonSubmit>
    </DivForm>
  );
};

export default Form;
