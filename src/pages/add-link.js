/* istanbul ignore file */
import React, { useContext, useReducer } from 'react';

// Icons
import { Arrow } from 'assets/icons';

// Utilities
import { UniqeId } from 'utils';

// Contexts
import LinkListContext from 'contexts/link-list';

// Containers
import Content from 'containers/content';

// Components
import Input from 'components/input';
import Button from 'components/button';
import Toast from 'components/toast';

function AddLink() {
  const initialState = {
    name: '',
    link: '',
    errors: {},
  };

  const reducer = (state, action) => {
    return {
      ...state,
      ...action,
    };
  };

  // Local State
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, link, errors } = state;

  // Context
  const { addLinkItem, toastMessage } = useContext(LinkListContext);

  const handleChangeInput = (e, inputFieldsIsFill = false) => {
    const {
      target: { name, value },
    } = e;

    if (inputFieldsIsFill) {
      return dispatch({ name: '', link: '' });
    }

    return dispatch({ [name]: value });
  };

  const handleValidation = () => {
    const errors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors.name = 'Cannot be empty';
    }

    if (!link) {
      formIsValid = false;
      errors.link = 'Cannot be empty';
    }

    if (link && !/^(ftp|http|https):\/\/[^ "]+$/.test(link)) {
      formIsValid = false;
      errors.link = 'Invalid URL';
    }

    dispatch({ errors });
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      addLinkItem({
        id: UniqeId(),
        name,
        link,
        point: 0,
        createdAt: Date.now(),
      });

      return handleChangeInput(e, true);
    }
    return false;
  };

  return (
    <Content>
      {toastMessage !== '' && <Toast message={toastMessage} />}

      <Button to="/" extraClass="flex items-center mb-4">
        <Arrow />
        <span className="ml-2">Return to list</span>
      </Button>
      <form onSubmit={handleSubmit}>
        <Input
          autoFocus
          name="name"
          error={errors.name}
          value={name}
          id="name"
          label="Link Name"
          placeholder="e.g: My website"
          extraClass="mb-6"
          onChange={handleChangeInput}
        />

        <Input
          name="link"
          error={errors.link}
          value={link}
          id="link"
          label="Link URL"
          placeholder="e.g: http://yasinates.com"
          extraClass="mb-6"
          onChange={handleChangeInput}
        />

        <Button
          type="submit"
          extraClass="flex items-center bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Add
        </Button>
      </form>
    </Content>
  );
}

export default AddLink;
