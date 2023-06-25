import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPostsLoading,
  selectPosts,
  selectPostsError,
} from "../../../redux-store/posts/posts.selector";

import { CardContainer } from "./diaries.style";
import DairyItem from "../../dairy-item/dairy-item.component";
import {
  fetchPostsAsync,
  fetchPostsFailed,
} from "../../../redux-store/posts/posts.action";
import Spinner from "../../spinner/spinner.component";
import ErrorModal from "../../error-modal/error-modal.component";

const Diaries = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isPostsLoading = useSelector(selectIsPostsLoading);
  const postsError = useSelector(selectPostsError);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  return (
    <>
      {postsError ? (
        <ErrorModal
          errorMessage={postsError.message}
          resetError={fetchPostsFailed}
        />
      ) : isPostsLoading ? (
        <Spinner />
      ) : (
        <CardContainer>
          {posts &&
            posts.map((post) => (
              <DairyItem
                key={post._id}
                post={post}
              />
            ))}
        </CardContainer>
      )}
    </>
  );
};

export default Diaries;
