import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LogoImg from "../../../assets/logo.png";
import {
  StyledAppBar,
  StyledLogo,
  StyledTab,
  StyledTabs,
  StyledToolBar,
} from "./navigation.style";

const Navigation = () => {
  const [tabVal, setTabVal] = useState(0);
  const navigate = useNavigate();

  const handelClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/">
            <StyledLogo
              src={LogoImg}
              alt="Logo"
            />
          </Link>

          <StyledTabs
            value={tabVal}
            onChange={(e, val) => {
              setTabVal(val);
              e.preventDefault();
            }}
          >
            <StyledTab
              value={0}
              label="Home"
              onClick={() => handelClick("")}
            />
            <StyledTab
              value={1}
              label="Diaries"
              onClick={() => handelClick("diaries")}
            />
            <StyledTab
              value={2}
              label="Auth"
              onClick={() => handelClick("auth")}
            />
          </StyledTabs>
        </StyledToolBar>
      </StyledAppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
