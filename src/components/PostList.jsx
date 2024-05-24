import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ modalIsVisible, onHideModal }) {
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onHideModal}>
          <NewPost onCancel={onHideModal} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Ang" text="View my blog here!" />
        <Post author="Drew" text="Check out previous work here." />
      </ul>
    </>
  );
}

export default PostList;
