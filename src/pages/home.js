import React, { useContext } from 'react';

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
  const { onChangeSorting } = useContext(LinkListContext);

  return (
    <Content>
      <Modal />
      <Toast />

      <div className="flex justify-between">
        {/* Sorting */}
        <Selectbox
          placeholder="Choose One"
          options={[
            { value: 'last-added', label: 'Last Added', defaultSelected: true },
            { value: 'most-voted', label: 'Most Voted (Z-A)' },
            { value: 'less-voted', label: 'Less Voted (A-Z)' },
          ]}
          onSelected={(item) => onChangeSorting(item.value)}
        />

        {/* Button */}
        <Button to="/add" extraClass="flex items-center bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
          <span className="mr-3">Submit A Link</span>
          <svg width={16} height={16} viewBox="0 0 459.325 459.325" fill="#ffffff">
            <path d="M459.319 229.668c0 22.201-17.992 40.193-40.205 40.193H269.85v149.271c0 22.207-17.998 40.199-40.196 40.193-11.101 0-21.149-4.492-28.416-11.763-7.276-7.281-11.774-17.324-11.769-28.419l-.006-149.288H40.181c-11.094 0-21.134-4.492-28.416-11.774C4.501 250.817.006 240.769.006 229.668 0 207.471 17.992 189.475 40.202 189.475h149.267V40.202C189.469 17.998 207.471 0 229.671 0c22.192.006 40.178 17.986 40.19 40.187v149.288h149.282c22.196.012 40.165 17.996 40.176 40.193z" />
          </svg>
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
