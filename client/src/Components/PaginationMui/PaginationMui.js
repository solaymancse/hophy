import React from 'react'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

export const PaginationMui = () => {
    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 50px;
    `
  return (
    <Wrapper>
        <Stack spacing={2}>
  
      <Pagination count={10} color="primary" />

    </Stack>
    </Wrapper>
  )
}
