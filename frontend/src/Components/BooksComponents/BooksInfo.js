import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class BooksInfo extends React.Component {

    render() {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {title, genre, author_name, publishing_date, rating, image_url} = this.props.books
        return (
          <Card style={layout.card}>
              <Image src={image_url} />
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