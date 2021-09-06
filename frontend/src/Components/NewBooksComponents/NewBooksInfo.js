import React from 'react' 
import { Card, Image } from 'semantic-ui-react'
import bookPhoto from '../BooksComponents/BooksPhotos'



class NewBooksInfo extends React.Component{

    renderNewBooks = () => {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {title, genre, author_name, publishing_date, rating} = this.props.novels
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
                     {author_name}
                      <br />
                      Date Published: {publishing_date}
                      <br />
                      Rating: {rating}/10
                      <br />
                  </Card.Description>
                  <br />
              </Card.Content>
          </Card>
        )
    }


    render(){
        return (
            <div>
                {this.renderNewBooks()}
            </div>
        )
    }
}
export default NewBooksInfo