import React from 'react'
import BookSearch from './BookSearch';
import BooksCollection from './BooksCollection';
import { Container } from 'semantic-ui-react'


class Books extends React.Component {
    
    state = {
        books: [],
        renderedBooks: [],
        searchInput: ''
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
                <h1>Catalog</h1>
                <BookSearch handleSearchInput={this.handleSearchInput} />
               <Container>
                   <BooksCollection books={this.state.renderedBooks} />
               </Container>
            </div>
            
        );     
    }
}

export default Books;
