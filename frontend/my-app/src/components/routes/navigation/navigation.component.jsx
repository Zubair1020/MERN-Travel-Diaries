import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";
import { selectTabValue } from "../../../redux-store/user-interaction/userInteraction.selector";
import { selectIsLoggedIn } from "../../../redux-store/user/user.selector";

import LogoImg from "../../../assets/logo.png";
import {
  StyledAppBar,
  StyledLogo,
  StyledTab,
  StyledTabs,
  StyledToolBar,
} from "./navigation.style";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const tabValue = useSelector(selectTabValue);

  const handelClick = (path, value) => {
    navigate(`/${path}`);
    dispatch(setTabValue(value));
  };

  return (
    <>
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/">
            <StyledLogo
              src={LogoImg}
              alt="Logo"
              onClick={() => {
                dispatch(setTabValue(0));
              }}
            />
          </Link>

          <StyledTabs
            value={tabValue} // Update this line
            onChange={(e, val) => {
              dispatch(setTabValue(val));
              e.preventDefault();
            }}
          >
            <StyledTab
              value={0}
              label="Home"
              onClick={() => handelClick("", 0)}
            />
            <StyledTab
              value={1}
              label="Diaries"
              onClick={() => handelClick("diaries", 1)}
            />
            {!isLoggedIn && (
              <StyledTab
                value={2}
                label="Auth"
                onClick={() => handelClick("auth", 2)}
              />
            )}
            {isLoggedIn && (
              <StyledTab
                value={2}
                label="Add"
                onClick={() => handelClick("add", 2)}
              />
            )}
            {isLoggedIn && (
              <StyledTab
                value={3}
                label="Profile"
                onClick={() => handelClick("profile", 3)}
              />
            )}
          </StyledTabs>
        </StyledToolBar>
      </StyledAppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
