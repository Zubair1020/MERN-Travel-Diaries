import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux-store/user/user.selector";
import { addPost } from "../../../utils/crud-api-call.utils";

import PostUpdate from "../../post-update/post-update.component";
import ErrorModal from "../../error-modal/error-modal.component";
import Spinner from "../../spinner/spinner.component";

const Add = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handelSubmit = async (data, reset) => {
    console.log(data.date);
    addPost(
      data,
      currentUser,
      navigate,
      reset,
      setError,
      dispatch,
      setIsLoading
    );
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : error ? (
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
