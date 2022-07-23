import { useState, useEffect } from 'react';
import Modal from 'components/Modal/Modal';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import LoaderSpiner from 'components/Loader/Loader';
import api from 'services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import LoadMore from 'components/Button/Button';

const Status = {
  LOADING: 'loading',
  LOADED: 'loaded',
};

export function App() {
  // state = {
  //   pictureName: '',
  //   pictureData: [],
  //   pictureModal: '',
  //   status: null,
  //   page: 1,
  //   per_page: 12,
  //   isVisible: false,
  // };
  const [{ pictureName }, setPictureName] = useState('');
  const [pictureData, setPictureData] = useState('');
  const [pictureModal, setPictureModal] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState('');
  const [isVisible, setIsVisible] = useState('');

  useEffect(() => {
    if (!pictureName) {
      return;
    }
    setStatus(Status.LOADING);
    api
      .fetchPicture(pictureName, page)
      .then(res => {
        setPictureData(state => [...state, ...res.data.hits]);
        setIsVisible(page < Math.ceil(res.data.totalHits / 12));
        setStatus(Status.LOADED);
      })
      .catch(error => console.log(error))
      .finally(scrollToBottom);
  }, [page, pictureName]);

  const handleFormSubmit = pictureName => {
    setPage(1);
    setPictureName({ pictureName });
    setPictureData('');
  };

  // pictureModalClick = picture => {
  //   this.setState({
  //     pictureModal: picture,
  //   });
  // };
  const pictureModalClick = picture => {
    setPictureModal(picture);
  };

  // resetPage() {
  //   this.setState({
  //     page: 1,
  //   });
  // }

  // resetData() {
  //   this.setState({
  //     pictureData: '',
  //   });
  // }

  // closeModal = () => {
  //   this.setState({
  //     pictureModal: '',
  //   });
  // };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === Status.LOADING && <LoaderSpiner />}
      {pictureData.length > 0 && (
        <ImageGallery>
          <ImageGalleryItem
            pictureData={pictureData}
            onClick={pictureModalClick}
          />
        </ImageGallery>
      )}
      {status === Status.LOADED && isVisible && (
        <LoadMore onClick={() => setPage(state => state + 1)} />
      )}
      {pictureModal.length > 0 && (
        <Modal onClose={() => setPictureModal('')}>
          <img src={pictureModal} alt="" />
        </Modal>
      )}
    </div>
  );
}