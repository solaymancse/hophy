import React, { useEffect, useState } from "react";


import "./PreLoader.css";
import { MainComponents } from './../../MainComponents';

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
        <MainComponents/>
      )}
    </>
  );
};
