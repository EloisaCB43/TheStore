import React from "react";

import { styled } from "@mui/system";

const FormContainer = styled("form")(({ theme }) => ({
  [theme.breakpoints.up("tablet")]: {
    margin: "10px 0px 0px 10px",
    width: "70%",
  },
  [theme.breakpoints.up("laptop")]: {
    width: "80%",
    margin: "25px 0px 0px 10px",
  },
}));
const FormStyle = styled("div")(({ theme }) => ({
  width: "60%",
  [theme.breakpoints.up("tablet")]: {
    width: "75%",
  },
  [theme.breakpoints.up("laptop")]: {
    width: "35%",
  },
}));

const TitleFinalize = styled("h3")(({ theme }) => ({
  fontFamily: theme.palette.primaryText.family,
  margin: "14px 0px 10px 0px",
  fontSize: "17PX",
  [theme.breakpoints.up("tablet")]: {
    marginLeft: "10px",
  },
  [theme.breakpoints.up("laptop")]: {
    fontSize: "20px",
  },
}));
const Field = styled("div")(({ theme }) => ({
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

const Form = ({ register, errors, handleSubmit, onSubmit }) => {
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <label>First Name</label>
        <InputStyled {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </Field>

      <Field>
        <label>Last Name</label>
        <InputStyled {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </Field>

      <Field>
        <label>Address</label>
        <InputStyled {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </Field>

      <Field>
        <label>Email</label>
        <InputStyled
          {...register("email", {
            pattern: /^[\w]+@([\w-])+[\w-]{2,4}$/,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </Field>

      <ButtonSubmit type="submit">Finalize shopping</ButtonSubmit>
    </FormContainer>
  );
};

export { Form, TitleFinalize, FormStyle };
