import { AppBar, Tab, Tabs, Toolbar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  position: sticky;
  background-color: #fff;
  box-shadow: 0px 0px 4px 6px rgba(0, 0, 0, 0.2);
`;
export const StyledToolBar = styled(Toolbar)``;

export const StyledLogo = styled("img")`
  max-width: clamp(5rem, 8vw, 7rem);
`;

export const StyledTabs = styled(Tabs)`
  margin-left: auto;
`;

export const StyledTab = styled(Tab)`
  color: #000;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: clamp(0.6rem, 5vw, 1.1rem);
  transition: color 0.3s ease;

  :hover {
    color: #ffd93d;
  }
`;
