import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux-store/user/user.selector";
import { deletePostById } from "../../utils/firebase.utils";

import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { StyledCard, StyledCardActions } from "./dairy-item.style";

const DairyItem = ({ post, name }) => {
  const { title, description, image, location, date, user, id } = post;

  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month},${day},${year}`;
  };

  const handelClick = (path) => {
    navigate(path);
  };
  const handelDelete = (id) => {
    deletePostById(currentUser, id).catch((error) => {
      console.error(error.message);
      throw error;
    });
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            sx={{ bgcolor: "#FFD93D", color: "black" }}
          >
            {name && name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditLocationAltIcon sx={{ color: "gray" }} />
          </IconButton>
        }
        title={location}
        subheader={formatDate(date)}
      />
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={location}
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      {currentUser === user && (
        <StyledCardActions style={{ textAlign: "right" }}>
          <IconButton
            className="editButton"
            onClick={() => handelClick(`/post/${id}`)}
          >
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton
            className="deleteButton"
            onClick={() => handelDelete(id)}
          >
            <DeleteIcon />
          </IconButton>
        </StyledCardActions>
      )}
    </StyledCard>
  );
};

export default DairyItem;
