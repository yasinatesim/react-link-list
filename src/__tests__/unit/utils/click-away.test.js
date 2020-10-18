import React from 'react';
import { render } from '@testing-library/react';

// Utilities
import ClickAway from 'utils/click-away';

describe('ClickAway Utils', () => {
  test('Normal case', () => {
    render(
      <ClickAway callback={() => console.log('click-away is running')}>
        <h2>This is test title</h2>
        <p>This is test paragraph</p>
      </ClickAway>
    );
  });
});
