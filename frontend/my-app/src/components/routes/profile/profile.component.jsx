import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux-store/user/user.selector";
import { setCurrentUserSuccess } from "../../../redux-store/user/user.action";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";
import { useNavigate } from "react-router-dom";
import { selectPosts } from "../../../redux-store/posts/posts.selector";
import { getUserDetails } from "../../../utils/firebase.utils";

import DairyItem from "../../dairy-item/dairy-item.component";
import Spinner from "../../spinner/spinner.component";
import { Button, Typography } from "@mui/material";
import { CardContainer } from "../diaries/diaries.style";
import { StyledBox } from "./profile.style";

const Profile = () => {
  const currentUserId = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUserDetails(currentUserId)
      .then((user) => {
        setUserDetails(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw error;
      });
  }, []);

  const posts = useSelector(selectPosts);
  const userPosts = posts.filter((post) => post.user === currentUserId);

  const handelClick = () => {
    dispatch(setCurrentUserSuccess(null));
    dispatch(setTabValue(0));
    navigate("/");
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <StyledBox>
            <Typography variant="h2">User Profile</Typography>
            <div>
              <Typography variant="h4">{userDetails.name}</Typography>
              <Typography variant="h5">{userDetails.email}</Typography>
              <Button
                size="large"
                variant="contained"
                onClick={handelClick}
              >
                Log out
              </Button>
            </div>
          </StyledBox>
          <CardContainer>
            {userPosts.map((post) => (
              <DairyItem
                key={post.id}
                post={post}
                name={userDetails.name}
              />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
};

export default Profile;
