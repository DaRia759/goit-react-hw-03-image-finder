import { Component } from "react";
// import axios from "axios";
import css from './App.module.css';
import SearchBar from './SearchBar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import * as getImage from './API/api';

const PER_PAGE = 12;

export default class App extends Component {
    state = {
        searchWord: '',
        images: [],
        page: 1,
        totalPages: 1,
        showLoader: false,
        error: null,
    };

    async componentDidUpdate(_, prevState) {
        const searchedWordUpdate =
            prevState.searchWord !== this.state.searchWord;
        const pageUpdate = prevState.page !== this.state.page;

        if (searchedWordUpdate || pageUpdate) {
            this.setState({ showLoader: true });
            try {
                const result = await getImage.fetchImagesBundle({
                    query: this.state.searchWord,
                    page: this.state.page,
                    perPage: PER_PAGE,
                });
                if (result.totalHits === 0) {
                    toast.warning(
                        'Sorry! There is no result for your request'
                    );
                    return;
                }
                if (searchedWordUpdate) {
                    toast.info(
                        `There are ${result.totalHits} images we found`
                    );
                    this.setState({ totalPages: Math.ceil(result.totalHits / PER_PAGE) });
                }
                // // const hits = result.images.map(image => {
                // //     return {
                // //         id: image.id,
                // //         webformatURL: image.webformatURL,
                // //         largeImageURL: image.largeImageURL,
                // //         user: image.user,
                // //     };
                // // });
                // this.setState(prevState => ({
                //     images: [...prevState.images, ...hits]
                // }));
            } catch (error) {
                this.setState({ error: error.message });
                toast.error(`Error occured ${this.state.error}`);
            } finally {
                this.setState({ showLoader: false });
            }
        }
    }

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

