import React from 'react';
import Modal from 'react-modal';
import PdfViewer from './PdfViewer';

Modal.setAppElement('#root');

const PdfModal = ({ isOpen, onClose, pdfUrl }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} 
        style={{ 
            overlay: { 
                zIndex: 1000,
                backgroundColor: 'rgba(0, 0, 0, 0.75)' 
            },
            content: { 
                width: '90%', 
                height: '90%', 
                position: 'fixed', 
                margin: 'auto',
                zIndex: 1010
            }
        }}>
            <button title='Cerrar' onClick={onClose} style={{ border: 'none', background: 'none', color: '#931f1d', position: 'absolute', top: 0, right: 0, cursor: 'pointer', fontSize: '1.3rem' }}><i class="bi bi-x-circle-fill"></i></button>
            <PdfViewer pdfUrl={pdfUrl} />
        </Modal>
    );
};

export default PdfModal;
