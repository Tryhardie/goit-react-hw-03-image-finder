import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button />
        <Loader />
        <Modal />
      </>
    );
  }
}

export default App;
