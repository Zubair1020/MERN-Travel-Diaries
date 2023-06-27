import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setIsSignedUp } from "../../redux-store/user-interaction/userInteraction.action";
import { selectIsSignedUp } from "../../redux-store/user-interaction/userInteraction.selector";

import { Button, Typography, InputLabel } from "@mui/material";
import { StyledBox, StyledForm, StyledTextField } from "./form.style";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const isSignedUp = useSelector(selectIsSignedUp);

  return (
    <>
      <StyledBox>
        <Typography variant="h3">{isSignedUp ? "Login" : "Sign Up"}</Typography>

        <StyledForm
          onSubmit={handleSubmit((data) => onSubmit(data, reset, isSignedUp))}
        >
          {!isSignedUp && (
            <>
              <InputLabel
                error={!!errors.name}
                htmlFor="name"
              >
                Name
              </InputLabel>
              <StyledTextField
                type="text"
                id="name"
                error={!!errors.name}
                helperText={!!errors.name && <span>{errors.name.message}</span>}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
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
            error={!!errors.email}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <StyledTextField
            type="email"
            id="email"
            error={!!errors.email}
            helperText={!!errors.email && <span>{errors.email.message}</span>}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          <InputLabel
            error={!!errors.password}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <StyledTextField
            type="password"
            id="password"
            error={!!errors.password}
            helperText={
              !!errors.password && <span>{errors.password.message}</span>
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
            disabled={
              !!(
                (!isSignedUp && errors.name) ||
                errors.email ||
                errors.password
              )
            }
          >
            {isSignedUp ? "login" : "sign up"}
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() => dispatch(setIsSignedUp(!isSignedUp))}
          >
            change to {!isSignedUp ? "Login" : "Sign Up"}
          </Button>
        </StyledForm>
      </StyledBox>
    </>
  );
};

export default Form;
