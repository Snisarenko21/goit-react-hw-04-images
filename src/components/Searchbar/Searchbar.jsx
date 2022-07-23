import { useState } from 'react';
import css from './Searchbar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function Searchbar({ onSubmit }) {
  const [pictureName, setPictureName] = useState('');

  const handleSearchChange = e => {
    setPictureName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pictureName.trim() === '') {
      return toast.error('Enter a search query');
    }
    onSubmit(pictureName);
    setPictureName('');
  };

  return (
    <header className={css.Searchbar}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          value={pictureName}
          onChange={handleSearchChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
