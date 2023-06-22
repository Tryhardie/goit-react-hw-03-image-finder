import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, enlargeImage }) => {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={webformatURL}
        alt=""
        onClick={() => enlargeImage(largeImageURL)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  enlargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
