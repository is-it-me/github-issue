import { Fragment, memo, useMemo } from "react";
import { nanoid } from "nanoid";
import MemoBadge from "../components/Badge";
const Title = ({ text, labels }) => {
  const splitText = useMemo(() => text.split(":"), [text]);
  return (
    <div style={{ fontWeight: "bolder" }}>
      {`[${splitText[0]}]`}: {splitText[1]}{" "}
      {labels.slice(1).map((l) => (
        <Fragment key={nanoid()}>
          <MemoBadge
            text={l.name}
            color={l.color}
            description={l.description}
          />
        </Fragment>
      ))}
    </div>
  );
};
Title.propTypes = {
  text: "",
  labels: [],
};

const MemoTitle = memo(Title);

export default MemoTitle;
