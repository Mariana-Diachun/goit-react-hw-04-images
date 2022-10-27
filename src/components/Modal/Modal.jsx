import PropTypes from 'prop-types';
import { Overlay, ModalBox } from 'components/Modal/Modal.styled';

export const Modal = ({ largeImg, about, onModalClose }) => {
  return (
    <Overlay
      onClick={e => {
        if (e.target === e.currentTarget) onModalClose();
      }}
    >
      <ModalBox>
        <img src={largeImg} alt={about} />
      </ModalBox>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
