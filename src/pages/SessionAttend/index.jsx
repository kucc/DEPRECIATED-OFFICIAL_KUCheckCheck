import React from "react";
import { SAcontainer } from "../../components/SessionAttend";

function SessionAttend({ match }) {
  const { category, id } = match.params;
  return (
    <>
      <SAcontainer category={category} id={id} />
    </>
  );
}
export default SessionAttend;
