import React from 'react';
import Modal from 'react-modal';
import './modal.css';

Modal.setAppElement('#root'); // Accessibility

function CustomModal(props) {
    const { primaryColor, modalIsOpen, setModalIsOpen } = props;

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="custom-modal"
                overlayClassName="custom-modal-overlay"
                style={{
                    content: {
                        border: '5px solid ' + primaryColor
                    }
                }}
            >
                {/* Close Button */}
                <button
                    onClick={() => setModalIsOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '5px',
                        right: '15px',
                        // padding: '5px 10px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '30px',
                    }}
                >
                    &times; {/* Close icon (X) */}
                </button>
                {
                    props.children
                }
            </Modal>
        </div>
    );
}

export default CustomModal;
