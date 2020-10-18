import React from 'react';
import { render } from '@testing-library/react';

// Components
import Input from 'components/input';

describe('Input Component', () => {
  test('Required props', () => {
    render(<Input id="test-id" label="This is a label" />);
  });

  test('Not Required props', () => {
    render(<Input error="This is an error" extraClass="this-class" id="test-id" label="This is a label" />);
  });

  test('Other Props', () => {
    render(<Input id="test-id" label="This is a label" onChange={(e) => console.log(e.target.value)} />);
  });
});
