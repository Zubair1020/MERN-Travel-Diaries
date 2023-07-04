import { useSelector } from "react-redux";
import {
  selectIsPostsLoading,
  selectPosts,
  selectPostsError,
} from "../../../redux-store/posts/posts.selector";
import { fetchPostsFailed } from "../../../redux-store/posts/posts.action";

import { CardContainer } from "./diaries.style";
import DairyItem from "../../dairy-item/dairy-item.component";
import Spinner from "../../spinner/spinner.component";
import ErrorModal from "../../error-modal/error-modal.component";

const Diaries = () => {
  const posts = useSelector(selectPosts);
  const isPostsLoading = useSelector(selectIsPostsLoading);
  const postsError = useSelector(selectPostsError);

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
                key={post.id}
                post={post}
              />
            ))}
        </CardContainer>
      )}
    </>
  );
};

export default Diaries;
