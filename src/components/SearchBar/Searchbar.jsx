import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './SearchBar.module.css';

export default class SearchBar extends React.Component { // Change here
    state = {
        searchWord: '',
    }

    handleChange = e => {
        this.setState({
            searchWord: e.currentTarget.value.toLowerCase()
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchWord.trim() === '') {
            toast.error('Please enter your request');
            return;
        } 
        this.props.onSubmit(this.state.searchWord.trim());
        this.setState({ searchWord: '' });
    };

    render() {
        const { searchWord } = this.state;
        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.button}>
                        <span className={css.buttonLabel}>Search</span>
                    </button>

                    <input
                        className={`${css.input} ${searchWord.trim() === '' ? css.inputError : ''}`}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value={searchWord}
                        onChange={this.handleChange}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>   
        )
    }
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
