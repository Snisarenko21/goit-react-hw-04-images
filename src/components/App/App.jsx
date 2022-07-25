import { useState, useEffect } from 'react';
import Modal from 'components/Modal/Modal';
import ImageGallery from 'components/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem';
import LoaderSpiner from 'components/Loader/Loader';
import api from 'services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import LoadMore from 'components/Button/Button';

const Status = {
  LOADING: 'loading',
  LOADED: 'loaded',
};

export default function App() {
  const [{ pictureName }, setPictureName] = useState('');
  const [pictureData, setPictureData] = useState('');
  const [pictureModal, setPictureModal] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const per_page = 12;

  useEffect(() => {
    if (!pictureName) {
      return;
    }
    setStatus(Status.LOADING);
    api
      .fetchPicture(pictureName, page)
      .then(res => {
        setPictureData(state => [...state, ...res.data.hits]);
        setIsVisible(page < Math.ceil(res.data.totalHits / per_page));
        setStatus(Status.LOADED);
      })
      .catch(error => console.log(error));
  }, [page, pictureName]);

  const handleFormSubmit = pictureName => {
    setPage(1);
    setPictureName({ pictureName });
    setPictureData('');
  };

  const pictureModalClick = picture => {
    setPictureModal(picture);
    setIsModal(!isModal);
  };

  const onButtonClick = () => {
    setPage(state => state + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === 'loading' && <LoaderSpiner />}
      {pictureData.length !== 0 && (
        <ImageGallery pictureData={pictureData} onClick={pictureModalClick} />
      )}
      {status === 'loaded' && isVisible && <LoadMore onClick={onButtonClick} />}
      {isModal && (
        <Modal onClose={pictureModalClick}>
          <img src={pictureModal} alt="" />
        </Modal>
      )}
    </div>
  );
}
