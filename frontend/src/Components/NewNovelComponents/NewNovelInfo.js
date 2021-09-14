import React from 'react' 
import { Card, Image, Button } from 'semantic-ui-react'
import bookPhoto from '../BookComponents/BookPhoto'


class NewNovelInfo extends React.Component{

  goodBye = (event) => {
    const id = parseInt(event.target.id)
    if(window.confirm("Are you sure?"))
    fetch(`http://localhost:9292/brequest/${id}`, {
        method: 'DELETE'
    })
    .then(() => { this.props.deleteNovel(id) })
   
 }

    render() {
        
            const layout = {
                card : {
                    opacity: "0.8",
                    borderRadius: "40px"
                }
            }
    
            const {title, genre, author_name, publishing_date, rating} = this.props.novel
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
                        <Button onClick={this.goodBye} id={this.props.novel.id}>Goodbye</Button>
                      </div>  
                </Card.Content>
              </Card>
            )
        }
    }

export default NewNovelInfo