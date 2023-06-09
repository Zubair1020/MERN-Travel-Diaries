import { useEffect, useState } from "react";
import { CardContainer } from "./diaries.style";
import DairyItem from "../../dairy-item/dairy-item.component";

const Diaries = () => {
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPostsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
