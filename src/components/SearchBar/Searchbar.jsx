import React, { Component } from 'react';
import PropType from 'prop-types';
import { toast } from 'react-toastify';
import css from './SearchBar.module.css'

export default class SearchBar extends Component {
    state = {
        searchWord: ''
    }

    handleChange = e => {
        this.setState({
            searchWord: e.currentTarget.value.toLowerCase()
        })
    };

    handleSubmit = event => {
        const { searchWord } = this.state;

        event.preventDefault();

        if (this.state.searchWord.trim() === '') {
            toast.error('Please enter your request');
            return;
        } else {
            this.props.onSubmit(searchWord.trim());
            this.setState({ searchWord: '' });
        }
    };

    render() {
        const { searchWord } = this.state;
        return (
            <header className={css.searchbar} onSubmit={this.handleSubmit}>
            <form className={css.searchForm}>
            <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
            </button>

            <input
                className={css.input}
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
};

SearchBar.propTypes = {
    onSubmit: PropType.func.isRequired,
};