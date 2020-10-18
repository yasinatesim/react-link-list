import React from 'react';
import { render } from '@testing-library/react';

// Components
import Modal from 'components/modal';

describe('Modal Component', () => {
  test('Required props', () => {
    render(<Modal isOpen={true} onToggleModal={({ isOpen }) => console.log(isOpen)} />);
  });

});
