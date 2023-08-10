import { Component } from "react";
// import PropTypes from 'prop-types';
// import axios from "axios";
import css from './App.module.css';
import SearchBar from './SearchBar/Searchbar';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';


export default class App extends Component {
    state = {
        searchWord: '',
        images: [],
    };

    handleFormOnSubmit = searchWord => {
        this.setState({ searchWord });
    };

    render() {
        return (
            <div className={css.app}>
                <SearchBar onSubmit={this.handleFormOnSubmit} />
                <ImageGallery searchWord={this.state.searchWord} />
                <ToastContainer position="top-center" autoClose={3000} />
            </div>
        )
    }
};

// App.propTypes = {
//     handleFormOnSubmit: PropTypes.func.isRequired,
// };
