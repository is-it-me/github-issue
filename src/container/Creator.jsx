import { memo } from "react";
const Creator = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        style={{ borderRadius: "50%", width: "30px", height: "30px" }}
        loading="lazy"
      />
    </div>
  );
};
Creator.propTypes = {
  image: "",
};

const MemoCreator = memo(Creator);

export default MemoCreator;
