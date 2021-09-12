import React from 'react' 
import BookInfo from './BookInfo'
import { Card } from 'semantic-ui-react'


class BookCollection extends React.Component {

    render() {
        return (
            <Card.Group itemsPerRow={4}>
                {this.props.books.map((book) => <BookInfo key={book.id} books={book} /> )}
            </Card.Group>
        )
    }

}

export default BookCollection;