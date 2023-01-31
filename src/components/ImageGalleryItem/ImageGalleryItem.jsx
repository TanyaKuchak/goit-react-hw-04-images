import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  static defaultProps = {
    webformatURL: '',
    largeImageURL: '',
  };

  static propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  onOpen = () => {
    this.setState({ isModalOpen: true });
  };

  onClose = () => {
    this.setState({ isModalOpen: false });
    // this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    // this.setState(({ isModalOpen }) => ({
    //   isModalOpen: !isModalOpen,
    // }));
  };

  render() {
    const { onOpen, onClose } = this;
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <GalleryItem onClick={onOpen}>
          {isModalOpen && (
            <Modal close={onClose}>
              <Image close={onClose} src={largeImageURL} alt={largeImageURL} />
            </Modal>
          )}
          <Image src={webformatURL} alt={webformatURL} />
        </GalleryItem>
        {/* {isModalOpen && (
          <Modal largeImageURL={largeImageURL} onModalClose={this.onClose} />
        )} */}
      </>
    );
  }
}
