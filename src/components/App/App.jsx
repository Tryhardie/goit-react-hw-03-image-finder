import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import fetchImages from 'services/search-images-api';
import { Notify } from 'notiflix';
import AppStyled from './App.styled';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    maxImages: null,
    error: null,
    isLoading: false,
    modal: {
      openModal: false,
      largeImageURL: '',
    },
  };

  handleSearchSubmit = async searchQuery => {
    this.setState({ searchQuery, page: 1, isLoading: true });
    try {
      const imagesArray = await fetchImages(searchQuery, 1);
      const images = imagesArray.hits;
      const maxImages = imagesArray.totalHits / 12;
      this.setState({ images, maxImages });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = async () => {
    const plusPage = this.state.page + 1;
    try {
      const imagesArray = await fetchImages(this.state.searchQuery, plusPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...imagesArray.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  enlargeImage = largeImageURL => {
    this.setState({ modal: { largeImageURL, openModal: true } });
  };

  closeImage = e => {
    this.setState({ modal: { largeImageURL: '', openModal: false } });
  };

  render() {
    const { searchQuery, page, images, maxImages, error, isLoading, modal } =
      this.state;
    let loadMore = true;
    if (page >= maxImages) {
      loadMore = false;
    }

    return (
      <>
        <AppStyled>
          <Searchbar onSubmit={this.handleSearchSubmit} />
          {isLoading && <Loader />}
          {error && Notify.failure(`${error.massage}`)}
          {images.length === 0 &&
            !isLoading &&
            searchQuery &&
            !error &&
            Notify.warning(`Images matching ${searchQuery} not found.`)}
          {images.length > 0 && !isLoading && (
            <ImageGallery
              images={images}
              loadMore={loadMore}
              handleLoadMore={this.handleLoadMore}
              enlargeImage={this.enlargeImage}
            />
          )}
          {modal.openModal && (
            <Modal
              largeImageURL={modal.largeImageURL}
              closeImage={this.closeImage}
            />
          )}
        </AppStyled>
      </>
    );
  }
}

export default App;
