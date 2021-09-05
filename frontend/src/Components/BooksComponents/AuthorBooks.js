import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import bookPhoto from './BooksPhotos'

class AuthorBooks extends React.Component {

    state = {
        author: {}
    }

    componentDidMount(){
        fetch(`http://localhost:9292/books/${this.props.match.params.id}`)
        .then(response => response.json())
        .then((books) => {
            this.setState({ books })
        })
    }


    renderInfo = () => {
       return this.state.books.map((book) => {
             <ul>
                 <li>{book.title}</li>
                 <li>{book.genre}</li>
                 <li>{book.rating}/10</li>
                 <li>{book.publishing_date}</li>
            </ul>
        })
    }

    render() {
       
        return (
          <div>
             
          </div>
            
             
        )
    }
}

export default AuthorBooks;