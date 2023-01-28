import { Container, Text } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import React, { Component } from 'react';
import * as API from '../../serviseAPI/api';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from '../Button';
import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    searchWord: '',
    gallery: [],
    page: 1,
    error: null,
    status: 'idle',
    totalHits: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchWord, page } = this.state;
    if (prevState.searchWord !== searchWord || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const galleryList = await API.fetchApiGallery(searchWord, page);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...galleryList.newData],
          status: 'resolved',
          totalHits: galleryList.totalHits,
        }));
      } catch (error) {
        this.setState({ error: true, status: 'rejected' });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = data => {
    this.setState({
      searchWord: data,
      page: 1,
      gallery: [],
    });
  };

  render() {
    const { gallery, status, error, totalHits, page } = this.state;
    const totalPage = totalHits / 12;
    return (
      <>
        <Container>
          <Searchbar onSubmit={this.onSubmit} />
        </Container>
        {status === 'idle' && <Text>Enter search query on form</Text>}
        {gallery.length > 0 && (
          <Container>
            <ImageGallery gallery={gallery} />
            {totalPage > page && <Button onClick={this.loadMore} />}
          </Container>
        )}
        {status === 'resolved' && gallery.length === 0 && (
          <Notification message={'Nothing found for your request'} />
        )}
        {status === 'rejected' && <Notification message={error.message} />}
      </>
    );
  }
}
