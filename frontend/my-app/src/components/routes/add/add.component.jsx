import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux-store/user/user.selector";
import { addPost } from "../../../utils/crud-api-call.utils";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";

import PostUpdate from "../../post-update/post-update.component";
import ErrorModal from "../../error-modal/error-modal.component";

const Add = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handelSubmit = (data, reset) => {
    addPost(data, currentUser, navigate, reset, setError, dispatch)
      .then(() => {
        reset();
        dispatch(setTabValue(1));
        navigate("/diaries");
      })
      .catch((error) => {
        setError(error);
        throw error;
      });
  };

  return (
    <>
      {error ? (
        <ErrorModal
          errorMessage={error.message}
          resetError={setError}
        />
      ) : (
        <PostUpdate
          onSubmit={handelSubmit}
          post
        />
      )}
    </>
  );
};

export default Add;
