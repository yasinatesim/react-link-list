import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  removeLinkItem: PropTypes.func,
  info: PropTypes.object,
};

function Modal({ isOpen, onToggleModal, removeLinkItem, info }) {

  return isOpen ? (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => onToggleModal({ isOpen: false })}
      >
        <div className="relative w-1/2 my-6 mx-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-bold">Remove Link</h3>
              <button
                type="button"
                className="p-1 bg-transparent border-0 text-black opacity-5 text-3xl  font-semibold outline-none focus:outline-none"
                onClick={() => onToggleModal({ isOpen: false })}
              >
                ×
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="my-4 text-gray-600 text-lg leading-relaxed">
                <div>Do you want to remove:</div>
                {info && <div className="font-bold text-2xl">{info.name}</div>}
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              {info && (
                <button
                className="uppercase bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => removeLinkItem(info)}
              >
                  Ok
                </button>
              )}
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => onToggleModal({ isOpen: false })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  ) : null;
}

Modal.propTypes = propTypes;

export default Modal;
