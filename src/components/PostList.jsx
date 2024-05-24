import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ modalIsVisible, onHideModal }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onHideModal}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
        <Post author="Ang" text="View my blog here!" />
        <Post author="Drew" text="Check out previous work here." />
      </ul>
    </>
  );
}

export default PostList;
