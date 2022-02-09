import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { MainComponents } from "../../MainComponents";
import "./PreLoader.css";

export const PreLoader = () => {
  const [done, SetDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      SetDone(true);
    }, 2000);
  }, []);
  return (
    <>
      {!done ? (
        <ReactLoading className='loading' type='spinningBubbles' color='#34ACE1' height={100} width={100} />
      ) : (
        <MainComponents />
      )}
    </>
  );
};
