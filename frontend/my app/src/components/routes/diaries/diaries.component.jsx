import { useEffect, useState } from "react";
import { CardContainer } from "./diaries.style";
import DairyItem from "../../dairy-item/dairy-item.component";
import { getPosts } from "../../../utils/crud-api-call.utill";

const Diaries = () => {
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    getPosts(setPostsData);
  }, []);

  return (
    <>
      <CardContainer>
        {postsData &&
          postsData.posts.map((post) => (
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
