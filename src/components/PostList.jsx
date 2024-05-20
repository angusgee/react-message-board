import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
  return (
    <>
      <ul>
        <Post author="Gus" text="Thanks for checking out my site!" />
        <Post author="Ang" text="View my blog here!" />
        <Post author="Drew" text="Check out previous work here." />
      </ul>
    </>
  );
}

export default PostList;
