import { memo } from "react";
const Badge = ({ color, text, description }) => {
  return (
    <span
      className="badge"
      style={{
        backgroundColor: `#${color}44`,
        borderRadius: "10px",
        padding: "5px",
        color: `#${color}`,
        fontWeight: "normal",
      }}
    >
      <b>{text}</b>
      {description !== null && (
        <span className="tooltiptext">{description}</span>
      )}
    </span>
  );
};

Badge.propTypes = {
  color: "",
  text: "",
  description: null,
};

const MemoBadge = memo(Badge);

export default MemoBadge;
