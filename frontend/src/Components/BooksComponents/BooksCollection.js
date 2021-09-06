import React from 'react' 
import BooksInfo from './BooksInfo'
import { Card } from 'semantic-ui-react'


class BooksCollection extends React.Component {

    render() {
        return (
            <Card.Group itemsPerRow={4}>
                {this.props.books.map((bookObj, id) => <BooksInfo key={id} books={bookObj}/>)}
            </Card.Group>
        )
    }

}

export default BooksCollection;