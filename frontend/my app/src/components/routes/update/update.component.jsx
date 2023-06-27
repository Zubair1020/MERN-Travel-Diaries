import { useEffect, useState } from "react";
import PostUpdate from "../../post-update/post-update.component";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPostDetails,
  updatePostById,
} from "../../../utils/crud-api-call.utils";
import Spinner from "../../spinner/spinner.component";
import ErrorModal from "../../error-modal/error-modal.component";
import { useDispatch } from "react-redux";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";

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
    console.log(data);
    setIsLoading(true);
    updatePostById(data, id)
      .then((resData) => {
        console.log(resData);
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
