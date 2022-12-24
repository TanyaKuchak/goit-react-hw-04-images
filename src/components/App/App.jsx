import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    searchWord: '',
    gallery: [],
  };

  handleFormSubmit = searchWord => {
    this.setState({ searchWord });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ToastContainer autoClose={3000} position="top-left" theme="dark" />
      </div>
    );
  }
}
