import React, { useContext, useReducer } from 'react';

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
  };

  const reducer = (state, action) => {
    return {
      ...state,
      ...action,
    };
  };

  // Local State
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, link } = state;

  // Context
  const { addLinkItem } = useContext(LinkListContext);

  const handleChangeInput = (e, inputFieldsIsFill = false) => {
    // eslint-disable-next-line
    const { target: { name, value } } = e;

    if (inputFieldsIsFill) {
      return dispatch({ name: '', link: '' });
    }

    return dispatch({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addLinkItem({
      id: UniqeId(),
      name,
      link,
      point: 0,
      createdAt: Date.now(),
    });

    return handleChangeInput(e, true);
  };

  return (
    <Content>
      <Toast />

      <Button to="/" extraClass="flex items-center mb-4">
        <svg height={20} viewBox="0 0 64 64" width={20} className="transform rotate-90">
          <path d="M32 8a2 2 0 00-2 2v39.899L15.448 34.621a2 2 0 00-2.897 2.758l16.62 17.449A3.973 3.973 0 0032 56c1.068 0 2.073-.416 2.862-1.207l16.586-17.414a2 2 0 00-2.896-2.758L34 49.963V10a2 2 0 00-2-2z" />
        </svg>
        <span className="ml-2">Return to list</span>
      </Button>
      <form onSubmit={handleSubmit}>
        <Input
          autoFocus
          name="name"
          value={name}
          id="name"
          label="Link Name"
          placeholder="e.g: My website"
          extraClass="mb-6"
          onChange={handleChangeInput}
        />

        <Input
          name="link"
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
