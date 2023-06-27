import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PostUpdate from "../../post-update/post-update.component";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPostDetails,
  updatePostById,
} from "../../../utils/crud-api-call.utils";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";

import Spinner from "../../spinner/spinner.component";
import ErrorModal from "../../error-modal/error-modal.component";

const Update = () => {
  const id = useParams()._id;
  const [error, setError] = useState(null);
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getPostDetails(id)
      .then((resData) => {
        setPost(resData.post);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        throw error;
      });
  }, []);

  const handelSubmit = (data, reset) => {
    setIsLoading(true);
    updatePostById(data, id)
      .then(() => {
        reset();
        setIsLoading(false);
        navigate("/diaries");
        dispatch(setTabValue(1));
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
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
      ) : isLoading ? (
        <Spinner />
      ) : (
        <PostUpdate
          onSubmit={handelSubmit}
          update={post}
        />
      )}
    </>
  );
};

export default Update;
