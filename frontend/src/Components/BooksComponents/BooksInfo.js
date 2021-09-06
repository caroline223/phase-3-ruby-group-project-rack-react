import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import bookPhoto from './BooksPhotos'
import { Link } from 'react-router-dom'

class BooksInfo extends React.Component {

    getBooks(){
        fetch(`http://localhost:9292/books/`)
       .then((result) => {
           result.json().then((resp) => {
               console.warn(resp)
           })
       })
    }
    
    
    deleteBook(id){
       fetch(`http://localhost:9292/books/${id}`, {
           method: 'DELETE'
       })
       .then((result) => {
           result.json().then((resp) => {
               console.warn(resp)
               this.getBooks()
           })
       })
    }
 
    render() {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {id, title, genre, author_name, publishing_date, rating, author_id} = this.props.books
        return (
          <Card style={layout.card} >
             <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200"/>
              <Card.Content >
                  <Card.Header>
                      {title} 
                  </Card.Header>
                  <Card.Description>
                      {genre}
                      <br />
                      <Link to={`authors/${author_id}`}>Author's Name: {author_name}</Link>   
                      <br />
                      Date Published: {publishing_date}
                      <br />
                      Rating: {rating}/10
                      <br />
                  </Card.Description>
                  <br />
                  <Button onClick={() => this.deleteBook(id)}>Checked-Out</Button>
              </Card.Content>
          </Card>
        )
    }
}

export default BooksInfo;