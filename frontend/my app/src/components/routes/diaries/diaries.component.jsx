import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPostsLoading,
  selectPosts,
} from "../../../redux-store/posts/posts.selector";

import { CardContainer } from "./diaries.style";
import DairyItem from "../../dairy-item/dairy-item.component";
import { fetchPostsAsync } from "../../../redux-store/posts/posts.action";
import Spinner from "../../spinner/spinner.component";

const Diaries = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isPostsLoading = useSelector(selectIsPostsLoading);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  return (
    <>
      {isPostsLoading ? (
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
