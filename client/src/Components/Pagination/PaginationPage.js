import React from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const PaginationPage = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <Stack spacing={2}>
        {pageNumber.map((number) => (
          <Pagination
            count={number}
            onClick={() => paginate(number)}
            color="primary"
          />
        ))}
      </Stack>
    </>
  );
};
