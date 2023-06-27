import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";
import { selectIsLoggedIn } from "../../../redux-store/user/user.selector";

import { ButtonBox, Hero } from "./home.style";
import { Button, Typography } from "@mui/material";
import Slider from "../../slider/slider.component";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handelClick = (path, value) => {
    navigate(`/${path}`);
    dispatch(setTabValue(value));
  };
  return (
    <header>
      <Slider />
      <Hero>
        <Typography variant="h1">
          Escape the ordinary, <br />
          Embrace <span>extraordinary</span> <span>Adventures</span>
        </Typography>
        <Typography>
          <q>
            Let your adventures unfold. Share your travel stories with the
            world.
          </q>
        </Typography>
        <ButtonBox>
          <Button
            size="large"
            variant="outlined"
            onClick={() =>
              isLoggedIn ? handelClick("add", 2) : handelClick("auth", 2)
            }
          >
            SHARE YOUR STORY
          </Button>
          <Button
            size="large"
            variant="contained"
            onClick={() => handelClick("diaries", 1)}
          >
            VIEW DIARIES
          </Button>
        </ButtonBox>
      </Hero>
    </header>
  );
};

export default Home;
