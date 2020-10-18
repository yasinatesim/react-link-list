import React from 'react';
import { render } from '@testing-library/react';

// Components
import Pagination from 'components/pagination';

describe('Pagination Component', () => {
  test('Normal case', () => {
    render(<Pagination totalItems={30} currentPage={1} onChange={()=> console.log(123)} />);
  });

});
