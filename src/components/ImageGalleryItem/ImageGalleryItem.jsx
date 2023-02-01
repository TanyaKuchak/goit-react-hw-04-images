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

  // onOpen = () => {
  //   this.setState({ isModalOpen: true });
  // };

  // onClose = () => {
  //   this.setState(({ isModalOpen }) => ({
  //     isModalOpen: !isModalOpen,
  //   }));
  // };
  togleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { togleModal } = this;
    const { isModalOpen } = this.state;
    const { tags, largeImageURL, webformatURL } = this.props;
    return (
      <>
        {isModalOpen && (
          <Modal onClose={togleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <GalleryItem onClick={togleModal}>
          <Image src={webformatURL} alt={tags} />
        </GalleryItem>
      </>
    );
  }
}
