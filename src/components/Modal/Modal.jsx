import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { ModalContainer, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static defaultProps = {
    url: '',
    onClose: null,
  };

  static propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    // children: PropTypes.node.isRequired,
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

  onCloseBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    // const { children } = this.props;
    return createPortal(
      <Overlay onClick={this.onCloseBackdrop}>
        <ModalContainer>
          {/* {children} */}
          <img src={largeImageURL} alt={tags} width="900" height="680" />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}
