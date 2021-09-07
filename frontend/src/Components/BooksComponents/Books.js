import React from 'react'
import BooksSearch from './BooksSearch';
import BooksCollection from './BooksCollection';
import NavBar from '../NavBar';
import { Container } from 'semantic-ui-react';
import NewBooks from '../NewBooksComponents/NewBooks';
import { Link } from 'react-router-dom'


class Books extends React.Component {
    
    state = {
        books: [],
        renderedBooks: [],
        searchInput: '',
    }

    componentDidMount() {
        fetch('http://localhost:9292/books')
        .then(response => response.json())
        .then(this.setInitialBooks);
    }

    setInitialBooks = (bookCollection) => {
        this.setState({
            books: [...bookCollection],
            renderedBooks: [...bookCollection]
        })
    }

    filterSearchByInput = (input) => {
        console.log(input)
        return this.state.books.filter(book => book.genre.toLowerCase().includes(input.toLowerCase())) 

    }

    handleSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value
        })

        if(event.target.value === '' ) {
            this.setState({ renderedBooks: [...this.state.books]})
        } else {
            this.setState({ renderedBooks: this.filterSearchByInput(event.target.value)})
        }

    }

   
    render() {
        return (
            <>
                 <NavBar />
                 <div className="h1">
                    Recommended Books
                 </div>
                 <br /><br /><br />
                <Container>
                    <BooksSearch handleSearchInput={this.handleSearchInput} />
                    <br />
                    <BooksCollection books={this.state.renderedBooks} />
                </Container>
                <br /><br /><br />
                <Container>
                <div className="h1">
                    Your Library
                 </div>
                 <br /><br /><br />
                    <div className="linkPosition">
                        <Link to="/brequests" className="newTitle">Upload A Book</Link>
                    </div>
                        <br /><br /><br />
                    <NewBooks />
                </Container>
            </>
            
        );     
    }
}

export default Books;