import { useForm } from "react-hook-form";

import { Container, Typography } from "@mui/material";
import {
  StyledButton,
  StyledBox,
  StyledForm,
  StyledTextFiled,
} from "./post-update.style";
import travelIcon from "../../assets/travel_icon.svg";

const PostUpdate = ({ post, update, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: update && update.title,
      description: update && update.description,
      imageUrl: update && update.image,
      location: update && update.location,
    },
  });

  const validateDate = (date) => {
    const selectedDate = new Date(date);
    const minimumDate = new Date(1990, 0, 1); // January 1, 1990
    const currentDate = new Date();

    if (selectedDate < minimumDate)
      return "Date must be on or after 1990-01-01";

    if (selectedDate > currentDate) return "Date cannot be in the future";

    return true; // Validation passed
  };

  return (
    <Container>
      <StyledBox>
        <Typography variant="h2">
          {post ? (
            <>
              Shear your <span>Memories</span>
            </>
          ) : (
            <>
              Edit your <span>Diary</span>
            </>
          )}
          <img
            src={travelIcon}
            alt="Travel Icon"
          />
        </Typography>
        <StyledForm onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
          <StyledTextFiled
            label="Title"
            variant="standard"
            error={!!errors.title}
            helperText={!!errors.title && <>{errors.title.message}</>}
            {...register("title", {
              required: "title is required",
              minLength: {
                value: 5,
                message: "title must be at least 5 characters",
              },
              maxLength: {
                value: 50,
                message: "title can be at most 50 characters",
              },
              validate: validateDate,
            })}
          />
          <StyledTextFiled
            label="Description"
            variant="standard"
            error={!!errors.description}
            helperText={
              !!errors.description && <>{errors.description.message}</>
            }
            {...register("description", {
              required: "description is required",
              minLength: {
                value: 10,
                message: "description must be at least 10 characters",
              },
              maxLength: {
                value: 150,
                message: "description can be at most 150 characters",
              },
            })}
          />
          <StyledTextFiled
            label="Image Url"
            variant="standard"
            error={!!errors.imageUrl}
            helperText={!!errors.imageUrl && <>{errors.imageUrl.message}</>}
            {...register("imageUrl", {
              required: "image url is required",
              minLength: {
                value: 5,
                message: "image url must be at least 5 characters",
              },
            })}
          />
          <StyledTextFiled
            label="Location"
            variant="standard"
            error={!!errors.location}
            helperText={!!errors.location && <>{errors.location.message}</>}
            {...register("location", {
              required: "Location is required",
              minLength: {
                value: 5,
                message: "Location must be at least 5 characters",
              },
              maxLength: {
                value: 50,
                message: "Location can be at most 50 characters",
              },
            })}
          />
          {post && (
            <StyledTextFiled
              label="Date"
              variant="standard"
              placeholder="MM-DD-YYYY"
              error={!!errors.date}
              helperText={errors.date && errors.date.message}
              {...register("date", {
                required: "Date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])-\d{4}$/,
                  message: "Invalid date format (MM-DD-YYYY)",
                },
                validate: validateDate,
              })}
            />
          )}
          <StyledButton
            variant="contained"
            type="submit"
            disabled={
              !!(
                errors.name ||
                errors.title ||
                errors.description ||
                errors.imageUrl ||
                errors.location ||
                errors.date
              )
            }
          >
            {post ? "Add Your Diary" : "Update your Diary"}
          </StyledButton>
        </StyledForm>
      </StyledBox>
    </Container>
  );
};

export default PostUpdate;
