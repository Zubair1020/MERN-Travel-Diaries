import { useNavigate } from "react-router-dom";
import { ButtonBox, Hero } from "./home.style";
import { Button, Typography } from "@mui/material";
import Slider from "../../slider/slider.component";

const Home = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate(`/diaries`);
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
          >
            SHARE YOUR STORY
          </Button>
          <Button
            size="large"
            variant="contained"
            onClick={handelClick}
          >
            VIEW DIARIES
          </Button>
        </ButtonBox>
      </Hero>
    </header>
  );
};

export default Home;
