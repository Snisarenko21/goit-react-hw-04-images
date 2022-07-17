import { Component } from 'react';
import css from './Searchbar.module.css';
import toast, { Toaster } from 'react-hot-toast';

class SearchBar extends Component {
  state = {
    pictureName: '',
  };

  handleSearchChange = e => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pictureName.trim() === '') {
      return toast.error('Enter a search query');
    }
    this.props.onSubmit(this.state.pictureName);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <Toaster />
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            value={this.state.pictureName}
            onChange={this.handleSearchChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
