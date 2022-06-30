import React from 'react';
import Modal from 'react-modal';
import './Alert.css'

const customStyles = {
    content: {
        width: '50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Alert = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='alert-container'>
            <div>
                <h6 className='text-center'><i class="fa-solid fa-triangle-exclamation"></i> What To Expect During Your Stay <a onClick={openModal} href="#">Read Message</a></h6>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='d-flex align-items-center justify-content-between alert m-0'>
                    <h6>What To Expect During Your Stay</h6>
                    <i onClick={closeModal} class="fa-solid fa-xmark alert-icon"></i>
                </div>
                <hr />
                <div>
                    <p>We are committed to providing a safe, enjoyable experience from check-in to check-out. Please check with regional health and government authorities about specific policies that may be in place at the location of your stay.</p>
                    <p><strong>Available:</strong> Executive Lounge, Fitness Center, Breakfast, On-site Restaurant(s), Pool, Room Service. Temporarily <strong>not available:</strong> Business Center, Concierge.</p>
                </div>
            </Modal>
        </div>
    );
};

export default Alert;