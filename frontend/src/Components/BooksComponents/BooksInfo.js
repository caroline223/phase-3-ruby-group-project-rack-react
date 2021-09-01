import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import bookPhoto from './BooksPhotos'
import { Link } from 'react-router-dom'

class BooksInfo extends React.Component {

    render() {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {title, genre, author_name, publishing_date, rating } = this.props.books
        return (
          <Card style={layout.card}>
             <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="360" height="200"/>
              <Card.Content >
                  <Card.Header>
                      {title} <br />
                  </Card.Header>
                  <Card.Description>
                      {genre}
                      <br />
                      Author's Name: {author_name}
                      <br />
                      Date Published: {publishing_date}
                      <br />
                      Rating: {rating}/10
                      <br />
                      <button>Checkout</button>
                  </Card.Description>
              </Card.Content>
          </Card>
        )
    }
}

export default BooksInfo;