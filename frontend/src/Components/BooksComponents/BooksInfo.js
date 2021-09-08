import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import bookPhoto from './BooksPhotos'
import { Link } from 'react-router-dom'
import FavoriteBook from './FavoriteBook'

class BooksInfo extends React.Component {
    
    state = {
        count: 0
    }

    increaseVote = () => {
        this.setState(({count}) => ({
            count: count + 1
        }))
    }


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
                        <Link to={`authors/${author_id}`}>Author's Name: {author_name}</Link>   
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
                        <Button onClick={()=>this.deleteBook(id)}>Not Interested</Button>
                      </div>  
                </Card.Content>
          </Card>
        )
        
    }
}

export default BooksInfo;