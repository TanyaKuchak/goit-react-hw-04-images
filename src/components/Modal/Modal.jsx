import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { ModalContainer, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onModalOpen = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.onModalOpen}>
        <ModalContainer>
          <img src={largeImageURL} alt={tags} width="850" />
        </ModalContainer>
      </Overlay>,
      modalRoot
      //   <div clasName = { css.Overlay } onClick = { this.onModalOpen } >
      //     <div className={css.Modal}>{this.props.children}</div>
      //   </div>,
      //   modalPortal
    );
  }
}
