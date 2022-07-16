import React from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => (
  <ul className={css.ImageGallery}>{children}</ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.object,
};
