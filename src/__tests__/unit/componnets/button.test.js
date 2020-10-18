import React from 'react';
import { render } from '@testing-library/react';

// Routes
import Routes from 'routes';

// Components
import Button from 'components/button';

describe('Button Component', () => {
  test('Required props', () => {
    render(<Button>Test</Button>);
  });

  test('Not Required props', () => {
    render(
      <Routes>
        <Button extraClass="test-class" to="/test-link">
          Test
        </Button>
      </Routes>
    );
  });
});
