import React, { useContext } from 'react';

// Icons
import { Plus } from 'assets/icons';

// Contexts
import LinkListContext from 'contexts/link-list';

// Containers
import Content from 'containers/content';
import LinkList from 'containers/link-list';

// Components
import Button from 'components/button';
import Selectbox from 'components/selectbox';
import Modal from 'components/modal';
import Toast from 'components/toast';

function Home() {
  // Context
  const { onChangeSorting, modal, onToggleModal, removeLinkItem, toastMessage } = useContext(LinkListContext);
  const { isOpen, info } = modal;

  return (
    <Content>
      {isOpen && <Modal isOpen={isOpen} onToggleModal={onToggleModal} removeLinkItem={removeLinkItem} info={info} />}

      {toastMessage !== '' && <Toast message={toastMessage} />}

      <div className="flex justify-between">
        {/* Sorting */}
        <Selectbox
          placeholder="Choose One"
          options={[
            { value: 'last-added', label: 'Last Added', defaultSelected: true },
            { value: 'most-voted', label: 'Most Voted (Z-A)' },
            { value: 'less-voted', label: 'Less Voted (A-Z)' },
          ]}
          onSelected={(item) => onChangeSorting(item)}
        />

        {/* Button */}
        <Button to="/add" extraClass="flex items-center bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
          <span className="mr-3">Submit A Link</span>
          <Plus className="text-white" />
        </Button>
      </div>

      {/* Link Lists */}
      <div className="mt-5">
        <LinkList />
      </div>
    </Content>
  );
}

export default Home;
