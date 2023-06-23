import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../../redux-store/posts/posts.selector";
import { getPosts } from "../../../utils/crud-api-call.utils";

import { CardContainer } from "./diaries.style";
import DairyItem from "../../dairy-item/dairy-item.component";

const Diaries = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    getPosts(dispatch);
  }, []);

  return (
    <>
      <CardContainer>
        {posts &&
          posts.map((post) => (
            <DairyItem
              key={post._id}
              post={post}
            />
          ))}
      </CardContainer>
    </>
  );
};

export default Diaries;
