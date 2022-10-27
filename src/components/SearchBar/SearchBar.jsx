import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import {
  Wrap,
  Form,
  Input,
  Button,
} from 'components/SearchBar/SearchBar.styled';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    setQuery(event.currentTarget.elements.query.value);

    if (query.trim() === '') {
      toast.error('Please enter a word!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <ImSearch />
        </Button>

        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </Form>
    </Wrap>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
