import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const user = {
    first_name: "Kelvin",
    last_name: "Me",
  };

  return (
    <div>
      <Link to="/about">
        <span>About</span>
      </Link>
      <button
        onClick={() => {
          history.push("/about", {
            user,
          });
        }}
      >
        Go To About
      </button>
    </div>
  );
};

export default withRouter(HomePage);
