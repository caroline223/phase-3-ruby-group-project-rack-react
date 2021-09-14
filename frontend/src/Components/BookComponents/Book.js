import React from 'react'
import BookSearch from './BookSearch';
import BookCollection from './BookCollection';
import NavBar from '../NavBar';
import { Container } from 'semantic-ui-react';
import NewBook from '../NewBookComponents/NewBook';
import { Link } from 'react-router-dom'


class Book extends React.Component {
    
    state = {
        books: [],
        renderedBooks: [],
        searchInput: ''
    }

    
    componentDidMount = () => {
        fetch('http://localhost:9292/books')
        .then(response => response.json())
        .then(this.setBooks);
    }


    setBooks = (bookCollection) => {
        this.setState({
            books: [...bookCollection],
            renderedBooks: [...bookCollection]
        })
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
    
    filterSearchByInput = (input) => {
        console.log(input)
        return this.state.books.filter(book => book.genre.toLowerCase().includes(input.toLowerCase())) 

    }

    deleteBook = (id) => {
        console.log(id)
        const newBooks = this.state.renderedBooks.filter(b => b.id !== id)

        this.setState({
          renderedBooks: newBooks,
        })
    
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
                    <BookSearch handleSearchInput={this.handleSearchInput} />
                    <br />
                    <BookCollection books={this.state.renderedBooks} deleteBook={this.deleteBook} />
                </Container>
                <br /><br /><br />
                <Container>
                <div className="h1">
                    Your Library
                 </div>
                    <br /><br /><br />
                <div className="linkPosition">
                    <Link to="/brequest" className="newTitle">Upload A Book</Link>
                </div>
                        <br /><br /><br />
                    <NewBook />
                </Container>
            </>
            
        );     
    }
}

export default Book;