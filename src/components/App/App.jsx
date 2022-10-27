import { useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'components/App/App.styled';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export function App() {
  const [imgSearch, setImgSearch] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const handleFormSubmit = query => {
    setImgSearch(query);
    setPage(1);
  };

  const onLoadMoreClick = () => {
    setPage(page => page + 1);
  };

  return (
    <Box>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery query={imgSearch} page={page} setStatus={setStatus} />
      {status === 'loading' && <Loader />}
      {status === 'resolved' && <Button onClick={onLoadMoreClick} />}
      {status === 'rejected' && <ErrorMessage />}

      <ToastContainer autoClose={3000} />
    </Box>
  );
}
