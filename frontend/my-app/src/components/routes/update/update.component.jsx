import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PostUpdate from "../../post-update/post-update.component";
import { useNavigate, useParams } from "react-router-dom";
import { setTabValue } from "../../../redux-store/user-interaction/userInteraction.action";
import {
  getPostDetailsById,
  updatePostById,
} from "../../../utils/firebase.utils";

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
    getPostDetailsById(id)
      .then((post) => {
        setPost(post);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        throw error;
      });
  }, []);

  const handelSubmit = async (data, reset) => {
    setIsLoading(true);
    try {
      await updatePostById(data, id);
      reset();
      setIsLoading(false);
      dispatch(setTabValue(1));
      navigate("/diaries");
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
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
