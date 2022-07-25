import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ picture, onClick }) => {
  const { webformatURL, largeImageURL, tags } = picture;
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  picture: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
