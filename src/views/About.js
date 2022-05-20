import React from "react";
import { withRouter } from "react-router-dom";

const AboutPage = (props) => {
  const user = props?.location?.state?.user;
  return <div>AboutPage</div>;
};

export default withRouter(AboutPage);
