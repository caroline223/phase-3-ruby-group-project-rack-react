import React from 'react'
import BooksSearch from './BooksSearch';
import BooksCollection from './BooksCollection';
import BooksCheckout from './BooksCheckout';
import { Link  } from 'react-router-dom';
import { Container } from 'semantic-ui-react'


class Books extends React.Component {
    
    state = {
        books: [],
        renderedBooks: [],
        searchInput: '',
        checkOutBooks: []
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

    handleBookDelete = (deleteBook) => {
        fetch('http://localhost:9292/books'+deleteBook.div, {
            method: "DELETE"
        })

        this.setState({
            checkOutBooks: this.state.checkOutBooks.filter(x => x !== deleteBook)
        })
    }

    handleBookAdd = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/books', this.configObject()) 
        .then(response => response.json())
        .then(addedBook => {
            this.setState({
                checkOutBooks:[...this.state.checkOutBooks, addedBook]
            })
        })
    }

    configObject = () => {
        return {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                
            })
        }
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
            <div>
                <h1>Catalog</h1>
                <Container>
                    <BooksCheckout />
                </Container>
                <br />
               <Container>
                    <BooksSearch handleSearchInput={this.handleSearchInput} />
                   <BooksCollection books={this.state.renderedBooks} />
               </Container>
               <p>If your favorite book is not listed here, click below to send us a request!</p>
                <Link to="/bform">Request A Book</Link>
            </div>
            
        );     
    }
}

export default Books;