import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, enlargeImage, handleLoadMore, loadMore }) => {
  return (
    <>
      <ul>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            enlargeImage={enlargeImage}
          />
        ))}
      </ul>
      {loadMore && <Button handleLoadMore={handleLoadMore} />}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  enlargeImage: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
  loadMore: PropTypes.bool.isRequired,
};

export default ImageGallery;
