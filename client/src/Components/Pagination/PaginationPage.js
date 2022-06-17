import React from "react";

export const PaginationPage = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {pageNumber.map((number)=> (
          <li key={number} className="page-item">
            <button onClick={()=> paginate(number)} className="page-link">{number}</button>

          </li>
        ))}

      </ul>
    </>
  );
};
