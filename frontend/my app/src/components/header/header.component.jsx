import { ButtonBox, Hero } from "./header.style";
import { Button, Typography } from "@mui/material";
import Slider from "../slider/slider.component";

const Header = () => {
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
          >
            VIEW DIARIES
          </Button>
        </ButtonBox>
      </Hero>
    </header>
  );
};

export default Header;
