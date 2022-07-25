import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ pictureData, onClick }) => {
  return (
    <div className={css.ImageGallery}>
      {pictureData.map(picture => {
        return (
          <ImageGalleryItem
            key={picture.id}
            picture={picture}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

ImageGallery.propTypes = {
  pictureData: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
