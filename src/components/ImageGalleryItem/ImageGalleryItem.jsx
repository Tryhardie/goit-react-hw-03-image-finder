import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, enlargeImage }) => {
  return (
    <li>
      <img
        src={webformatURL}
        alt=""
        onClick={() => enlargeImage(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  enlargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
