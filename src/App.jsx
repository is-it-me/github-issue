import MemoIssue from "./container/Issue";
import "./App.css";
import { Fragment, useCallback, useRef, useState } from "react";
import { nanoid } from "nanoid";
import useLoadMore from "./hooks/useLoadMore";

function App() {
  const [pageNumber, setPageNumber] = useState(0);

  const { showIssues, hasMore, loading } = useLoadMore(pageNumber);

  console.log(showIssues, pageNumber);

  const observer = useRef();
  const lastIssueElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <div
        style={{
          height: "200px",
          overflow: "scroll",
          borderBottom: "10px dashed grey",
        }}
      >
        {showIssues.map((issue, _i) => {
          if (_i === showIssues.length - 1)
            return (
              <Fragment key={nanoid()}>
                <MemoIssue ref={lastIssueElementRef} data={issue} />
              </Fragment>
            );
          return (
            <Fragment key={nanoid()}>
              <MemoIssue data={issue} />
            </Fragment>
          );
        })}
      </div>
      {/* <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div> */}
    </div>
  );
}

export default App;
