import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';
import ImageGalleryStyled from './ImageGallery.styled';

const ImageGallery = ({ images, enlargeImage, handleLoadMore, loadMore }) => {
  return (
    <>
      <ImageGalleryStyled>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            enlargeImage={enlargeImage}
          />
        ))}
      </ImageGalleryStyled>
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
