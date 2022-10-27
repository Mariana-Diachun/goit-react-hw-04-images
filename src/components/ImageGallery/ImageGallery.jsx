import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchImages } from '../../services/fetchImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ query, page, setStatus }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    if (query === '') return;
    setStatus('loading');
    fetchImages(query, page, setStatus).then(data => {
      if (data.hits.length < 1) {
        setStatus('rejected');
      } else {
        setStatus('resolved');
      }
      setImages(prevImages => [...prevImages, ...data.hits]);
    });
  }, [query, page, setStatus]);

  return (
    images.length > 0 && (
      <List>
        {images.map(item => {
          return <ImageGalleryItem item={item} key={item.id} />;
        })}
      </List>
    )
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setStatus: PropTypes.func.isRequired,
};
