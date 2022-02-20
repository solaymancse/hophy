import React, { useEffect, useState } from "react";

import { HomeSection } from "../../pages/HomeSection";
import "./PreLoader.css";

export const PreLoader = () => {
  var Spinner = require("react-spinkit");
  const [done, SetDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      SetDone(true);
    }, 3000);
  }, []);
  return (
    <>
      {!done ? (
        <Spinner
          className="loading"
          name="ball-scale-multiple"
          color="#34ACE1"
        />
      ) : (
        <HomeSection />
      )}
    </>
  );
};
