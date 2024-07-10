/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FavFavo } from "../../icons/FavFavo";
import { FavUnfav } from "../../icons/FavUnfav";

export const ConcreteComponentNode = ({ fav }) => {
  return (
    <>
      {fav === "un-fav" && <FavUnfav className="!absolute !w-6 !h-6 !top-0 !left-0" />}

      {fav === "favo" && <FavFavo className="!absolute !w-6 !h-6 !top-0 !left-0" />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  fav: PropTypes.oneOf(["un-fav", "favo"]),
};
