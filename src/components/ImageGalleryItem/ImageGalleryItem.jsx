import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ pictureData, onClick }) => {
  return pictureData.map(picture => (
    <li
      key={picture.id}
      className={css.ImageGalleryItem}
      onClick={() => onClick(picture.largeImageURL)}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={picture.webformatURL}
        alt=""
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  pictureData: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGalleryItem;
