import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    searchWord: '',
  };
  handleNameChange = e => {
    this.setState({ searchWord: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchWord.trim() === '') {
      return toast.warn('Please enter a keyword');
    }
    this.props.onSubmit(this.state.searchWord);
    this.setState({ searchWord: '' });
  };
  render() {
    return (
      //   <header class="searchbar">
      <form onSubmit={this.handleSubmit}>
        <button type="submit" class="button">
          <ImSearch style={{ marginRight: 8 }} />
          Search
        </button>

        <input
          //   class="input"
          type="text"
          name="searchWord"
          //   autocomplete="off"
          value={this.state.searchWord}
          onChange={this.handleNameChange}
          //   autofocus
          placeholder="Search images and photos"
        />
      </form>
      //   </header>
    );
  }
}
//

// import PropTypes from 'prop-types';
// import {
//   Header,
//   SearchForm,
//   ButtonSearch,
//   SearchFormInput,
// } from './Searchbar.styled';

// export const Searchbar = ({ onSubmit }) => {
//   const initialValues = {
//     searchWord: '',
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     resetForm();
//     if (values.searchWord.trim() === '') {
//       alert('Enter valid text');
//       return;
//     }
//     onSubmit(values.searchWord.toLowerCase());
//   };

//   return (
//     <Header>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <SearchForm autoComplete="of">
//           <ButtonSearch type="submit">
//             <span>Search</span>
//           </ButtonSearch>
//           <label htmlFor="searchWord"></label>
//           <SearchFormInput
//             id="searchWord"
//             type="text"
//             autoFocus
//             name="searchWord"
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </Formik>
//     </Header>
//   );
// };

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
