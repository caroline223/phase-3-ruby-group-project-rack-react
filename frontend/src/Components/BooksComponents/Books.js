import React from 'react'
import BooksSearch from './BooksSearch';
import BooksCollection from './BooksCollection';
import BooksCheckout from './BooksCheckout';
import { Link  } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import NavBar from '../NavBar';


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
            <div>
                 <NavBar />
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
                <Link to="/brequests">Request A Book</Link>
            </div>
            
        );     
    }
}

export default Books;