import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => (
  <ul className={css.ImageGallery}>{children}</ul>
);

ImageGallery.propTypes = {
  children: PropTypes.object,
};

export default ImageGallery;
