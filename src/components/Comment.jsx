import image from "../assets/comment.png";
import { memo } from "react";
const Comment = ({ text }) => {
  return (
    <div>
      <img src={image} style={{ width: "20px", height: "20px" }} /> {text}
    </div>
  );
};
Comment.propTypes = {
  text: "",
};

const MemoComment = memo(Comment);

export default MemoComment;
