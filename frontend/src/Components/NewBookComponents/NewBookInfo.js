import React from 'react' 
import { Card, Image, Button } from 'semantic-ui-react'
import bookPhoto from '../BookComponents/BookPhoto'


class NewBookInfo extends React.Component{

  deleteBook(id){
    fetch(`http://localhost:9292/brequest/${id}`, {
        method: 'DELETE'
    })
    .then((result) => {
        result.json().then((resp) => {
            console.warn(resp)
            this.getBooks()
        })
    })
 }

    getBooks(){
        fetch(`http://localhost:9292/brequest/`)
       .then((result) => {
           result.json().then((resp) => {
               console.warn(resp)
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
    
            const {id, title, genre, author_name, publishing_date, rating} = this.props.novel
            return (
              <Card color='olive' style={layout.card} >
                 <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200"/>
                  <Card.Content className="bookDescription">
                    <header>
                    {title} 
                    </header>
                  <Card.Description>
                      <br />
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
                  <Card.Content>
                      <div className="buttonPosition">
                        <Button onClick={()=>this.deleteBook(id)}>Goodbye</Button>
                      </div>  
                </Card.Content>
              </Card>
            )
        }
    }

export default NewBookInfo