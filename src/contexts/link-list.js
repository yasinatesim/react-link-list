import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Utilities
import Store from 'store2';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const LinkListContext = createContext({});

export const LinkListProvider = ({ children }) => {
  const { links: linksLS, pageNumber: pageNumberLS, sorting: sortingLS } = Store.get('link-list-app') ? Store.get('link-list-app') : {};

  const [links, setLinks] = useState(linksLS || []);
  const [pageNumber, setPageNumber] = useState(pageNumberLS || 1);
  const [sorting, setSorting] = useState(sortingLS || 'last-added');

  const [toastMessage, setToastMessage] = useState('');
  const [modal, setModal] = useState({});

  const handleToastMessage = ({ message, duration }) => {
    setToastMessage(message, duration);

    setTimeout(() => {
      setToastMessage('');
    }, duration);
  };

  const onToggleModal = ({ isOpen, info = null }) => {
    setModal({ isOpen, info });
  };

  const addLinkItem = (linkItem) => {
    setLinks([{ ...linkItem }, ...links]);

    handleToastMessage({ message: { title: linkItem.name, content: 'başarıyle eklendi' }, duration: 1000 });
  };

  const updateLinkItem = ({ item: linkItem, voteType }) => {
    const itemIndex = links.findIndex((item) => item.id === linkItem.id);

    if (voteType === 'up') {
      links[itemIndex].point += 1;
    } else if (links[itemIndex].point !== 0) {
      links[itemIndex].point -= 1;
    }

    setLinks([...links]);
  };

  const removeLinkItem = (item) => {
    const itemIndex = item.id;
    const newItems = links.filter((i) => i.id !== itemIndex);

    handleToastMessage({ message: { title: item.name, content: 'başarıyle silindi' }, duration: 3000 });
    setLinks(newItems);
  };

  const onChangeSorting = (optionValue) => {
    setSorting(optionValue);

    const newItems = links.sort((a, b) => {
      if (optionValue === 'most-voted') {
        return b.point - a.point;
      }
      if (optionValue === 'less-voted') {
        return a.point - b.point;
      }

      return b.createdAt - a.createdAt;
    });

    setLinks([...newItems]);
  };

  const onChangePageNumber = (page) => {
    setPageNumber(page);
  };

  const value = {
    links,
    setLinks,
    addLinkItem,
    updateLinkItem,
    removeLinkItem,
    toastMessage,
    modal,
    onToggleModal,
    onChangeSorting,
    pageNumber,
    onChangePageNumber,
  };

  useEffect(() => {
    Store.set('link-list-app', {
      links,
      pageNumber,
      sorting,
    });
  }, [value]);

  return <LinkListContext.Provider value={value}>{children}</LinkListContext.Provider>;
};

LinkListProvider.propTypes = propTypes;

export default LinkListContext;
