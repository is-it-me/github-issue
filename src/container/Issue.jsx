import { useMemo, forwardRef } from "react";
import MemoComment from "../components/Comment";
import MemoCreator from "./Creator";
import MemoTitle from "../components/Title";
const Issue = ({ data }, ref) => {
  const getTime = useMemo(() => {
    const createdDate = new Date(data.created_at).getTime();
    const currentTime = new Date().getTime();
    const diff = (currentTime - createdDate) / 3600000;
    if (diff < 24) return `${Math.floor(diff)} hours ago`;
    else return `${Math.floor(diff / 24)} days ago`;
  }, [data.created_at]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #000",
        padding: "5px 5px 5px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <MemoTitle text={data.title} labels={data.labels} />
        </div>
        <div
          style={{
            color: "#888",
            fontSize: "12px",
          }}
        >
          #{data.number} opend {getTime} by{" "}
          <a
            href={data.user.html_url}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            {data.user.login}
          </a>
        </div>
      </div>
      <div
        style={{
          width: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <MemoCreator image={data.user.avatar_url} />
        <MemoComment text={data.comments} />
      </div>
    </div>
  );
};
Issue.propTypes = {
  data: {},
};

const Forward = forwardRef(Issue);

export default Forward;
