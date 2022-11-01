import {
  Item,
  Image,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', onModalKeydown);
    } else window.removeEventListener('keydown', onModalKeydown);
  });

  const onModalKeydown = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { webformatURL, largeImageURL, tags } = item;
  return (
    <Item>
      <Image src={webformatURL} alt={tags} onClick={openModal} />
      {isModalOpen && (
        <Modal
          largeImg={largeImageURL}
          about={tags}
          onModalClose={closeModal}
        />
      )}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
