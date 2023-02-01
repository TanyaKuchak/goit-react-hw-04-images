import { Component } from 'react';
import { ModalContainer, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    // modalRootEl.appendChild(this.el);
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    // modalRootEl.removeChild(this.el);
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code !== 'Escape') {
      this.props.close();
    }
  };

  onCloseBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Overlay onClick={this.onCloseBackdrop}>
        <ModalContainer>{children}</ModalContainer>
      </Overlay>
    );
  }
}

// import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
// import { Component } from 'react';
// import { ModalContainer, Overlay } from './Modal.styled';

// const modalRoot = document.getElementById('modal-root');
// export class Modal extends Component {
//   static propTypes = {
//     onClose: PropTypes.func.isRequired,
//     children: PropTypes.node.isRequired,
//   };

//   componentDidMount() {
//     // modalRootEl.appendChild(this.el);
//     window.addEventListener('keydown', this.onKeyDown);
//   }

//   componentWillUnmount() {
//     // modalRootEl.removeChild(this.el);
//     window.removeEventListener('keydown', this.onKeyDown);
//   }

//   onKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   onCloseBackdrop = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     // const { largeImageURL, tags } = this.props;
//     const { children } = this.props;
//     return createPortal(
//       <Overlay>
//         <ModalContainer>
//           {children}
//           {/* <img src={largeImageURL} alt={tags} width="900" height="680" /> */}
//         </ModalContainer>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }
