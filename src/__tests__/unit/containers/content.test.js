import React from 'react';
import { render } from '@testing-library/react';

// Containers
import Content from 'containers/content';

describe('Content Containers', () => {
  test('Normal case', () => {
    render(
      <Content>
        <h2>This is test title</h2>
        <p>This is test paragraph</p>
      </Content>
    );
  });
});
