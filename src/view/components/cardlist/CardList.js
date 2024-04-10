import { useMemo } from "react";
import RecCard from "./card/Card";

const CardList = () => {
  const recs = ["recommendation1", "recommendation2", "recommendation3"];

  return (
    <>
      <RecCard data={recs[0]} />
      <RecCard data={recs[1]} />
      <RecCard data={recs[2]} />
    </>
  );
};

export default CardList;
