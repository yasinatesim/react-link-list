import React from 'react';
import { render } from '@testing-library/react';

// Containers
import LinkList from 'containers/link-list';

describe('Content Containers', () => {
  test('Normal case', () => {
    render(
      <LinkList
        links={[{ name: 'Test', url: 'http://www.yasinates.com' }]}
        pageNumber={2}
        onChangePageNumber={(page) => console.log(page)}
      />
    );
  });
});
