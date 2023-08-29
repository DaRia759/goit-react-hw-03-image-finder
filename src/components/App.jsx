import { Component } from "react";
// import axios from "axios";
import css from './App.module.css';
import SearchBar from './SearchBar/Searchbar';
import { toast } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import * as getImage from './API/api';
import Modal from './Modal/Modal';
import Button from "./Button/Button";
import Loader from "./Loader/Loader";


const PER_PAGE = 12;

export default class App extends Component {
    state = {
        searchWord: '',
        images: [],
        page: 1,
        totalPages: 1,
        showLoader: false,
        error: null,
        modalURL: '',
    };

    async componentDidUpdate(prevProps, prevState) {
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
                const hits = result.hits.map(element => {
                    return {
                        id: element.id,
                        webformatURL: element.webformatURL,
                        largeImageURL: element.largeImageURL,
                        user: element.user,
                    };
                });
                this.setState({
                    images: hits
                });
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

    onImageClick = url => {
        this.setState({ modalURL:url });
    };

    cleanURL = () => {
        this.setState({ modalURL:'' });
    };

    handleLoadMore = () => {
        if (this.state.page < this.state.totalPages) {
         this.setState(prevState => ({ page: prevState.page + 1 }));
        }
    };

    render() {
        const isLoadMoreDisabled = this.state.searchWord === '' || this.state.showLoader;
        const loadMoreButtonStyle = {
            display: isLoadMoreDisabled  ? 'none' : 'block'
        };

        return (
            <div className={css.app}>
                <SearchBar onSubmit={this.handleFormOnSubmit} />
                <ImageGallery images={this.state.images} onClick={this.onImageClick} />
                <Loader/>
                <Button onClick={this.handleLoadMore} disabled={isLoadMoreDisabled} style={loadMoreButtonStyle} />
                {Boolean(this.state.modalURL) && <Modal url={this.state.modalURL} cleanURL={this.cleanURL} />}
                
                
            </div>
        )
    }
};

