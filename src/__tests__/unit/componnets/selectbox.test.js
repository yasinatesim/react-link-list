import React from 'react';
import { render } from '@testing-library/react';

// Components
import Selectbox from 'components/selectbox';

describe('Selectbox Component', () => {
  test('Normal case', () => {
    render(
      <Selectbox
        placeholder="Choose One"
        options={[
          { value: 'test-1', label: 'This is test option 1' },
          { value: 'test-2', label: 'This is test option 2', defaultSelected: true },
          { value: 'test-3', label: 'This is test option 3' },
        ]}
        onSelected={(item) => console.log(item)}
      />
    );
  });
});
