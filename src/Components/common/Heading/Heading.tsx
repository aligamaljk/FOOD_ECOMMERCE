import { memo } from "react";
import "./Heading.scss"
const Heading = memo(({ titleOne , titleTwo} : { titleOne : string , titleTwo : string }) => {
  return (
    <>
      <div className="heading">
        <h3 className="title-one">{titleOne}</h3>
        <h2 className="title-two">{titleTwo}</h2>
      </div>
    </>
  );
});

export default Heading