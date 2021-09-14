import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import bookPhoto from './BookPhoto'
import { Link } from 'react-router-dom'
import FavoriteBook from './FavoriteBook'


class BookInfo extends React.Component {
    
    state = {
        count: 0,
    }

    increaseVote = () => {
        alert("Great Choice!")
        this.setState(({count}) => ({
            count: count + 1
        }))
    }

    notInterested = (event) => {
       const id = parseInt(event.target.id)
      if(window.confirm("Are you sure?"))
      fetch(`http://localhost:9292/books/${id}`, {
          method: 'DELETE'
      })
     .then(() => { this.props.deleteBook(id) })
    }

    render() {

         const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {title, genre, author_name, publishing_date, rating, author_id} = this.props.books
        return (
          <Card style={layout.card} color='olive'>
            <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200"/> 
              <Card.Content className="bookDescription">
                  <header>
                  {title} 
                  </header>
                  <Card.Description>
                      <br />
                      {genre}
                      <div>
                        <Link to={`author/${author_id}`}>Author's Name: {author_name}</Link>   
                      </div>
                     <div>
                        Date Published: {publishing_date}
                     </div>
                      <div>
                        Rating: {rating}/10
                      </div>
                      <br />
                      <div>
                          <FavoriteBook count={this.state.count} increaseVote={this.increaseVote} />
                      </div>
                  </Card.Description>    
                </Card.Content>
                <Card.Content>
                      <div className="buttonPosition">
                        <Button onClick={this.notInterested} id={this.props.books.id}>Not Interested</Button>
                      </div>  
                </Card.Content>
          </Card>
        )
        
    }
}

export default BookInfo;