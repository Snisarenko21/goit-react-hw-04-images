import React from 'react';
import css from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallryItem = ({ pictureData, onClick }) => {
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

export default ImageGallryItem;

ImageGallryItem.propTypes = {
  pictureData: PropTypes.arrayOf(PropTypes.object),
};
