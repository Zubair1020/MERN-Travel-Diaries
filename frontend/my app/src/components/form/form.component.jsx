import { useForm } from "react-hook-form";
import { Button, Typography, InputLabel } from "@mui/material";
import { StyledBox, StyledForm, StyledTextField } from "./form.style";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      <StyledBox>
        <Typography variant="h3">{!isSignUp ? "Login" : "Sign Up"}</Typography>

        <StyledForm
          onSubmit={handleSubmit((data) => onSubmit(data, reset, isSignUp))}
        >
          {isSignUp && (
            <>
              <InputLabel
                error={Boolean(errors.name)}
                htmlFor="name"
              >
                Name
              </InputLabel>
              <StyledTextField
                type="text"
                id="name"
                error={Boolean(errors.name)}
                helperText={
                  Boolean(errors.name) && <span>{errors.name.message}</span>
                }
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 4 characters",
                  },
                  maxLength: {
                    value: 200,
                    message: "Name can be at most 255 characters",
                  },
                })}
              />
            </>
          )}

          <InputLabel
            error={Boolean(errors.email)}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <StyledTextField
            type="email"
            id="email"
            error={Boolean(errors.email)}
            helperText={
              Boolean(errors.email) && <span>{errors.email.message}</span>
            }
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          <InputLabel
            error={Boolean(errors.password)}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <StyledTextField
            type="password"
            id="password"
            error={Boolean(errors.password)}
            helperText={
              Boolean(errors.password) && <span>{errors.password.message}</span>
            }
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              maxLength: {
                value: 20,
                message: "Password cannot exceed 20 characters",
              },
            })}
          />

          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={Boolean(
              (isSignUp && errors.name) || errors.email || errors.password
            )}
          >
            {!isSignUp ? "login" : "sign up"}
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            change to {!isSignUp ? "Login" : "Sign Up"}
          </Button>
        </StyledForm>
      </StyledBox>
    </>
  );
};

export default Form;
