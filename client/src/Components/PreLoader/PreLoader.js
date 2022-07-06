import React, { useEffect, useState } from "react";

import "./PreLoader.css";
import { MainComponents } from "./../../MainComponents";
import { Wrapper } from "./PreLoaderElements";

export const PreLoader = () => {
  const [done, SetDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      SetDone(true);
    }, 3000);
  }, []);
  return (
    <>
      {!done ? (
        <Wrapper>
          <div className="loader"></div>
        </Wrapper>
      ) : (
        <MainComponents />
      )}
    </>
  );
};
