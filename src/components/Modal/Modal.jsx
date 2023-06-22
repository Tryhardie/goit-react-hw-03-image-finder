import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.props.closeImage();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <Overlay onClick={this.handleClose}>
        <ModalStyled>
          <img src={largeImageURL} alt="" />
        </ModalStyled>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  closeImage: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
