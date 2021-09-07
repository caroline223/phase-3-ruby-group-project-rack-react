import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import authorPhoto from './AuthorsPhotos'

const gifPic = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=790b761103f7276c9f0dd8c0fe8c4837a39afe6a68edade0&rid=giphy.gif&ct=g'

class IndividualAuthor extends React.Component {

    state = {
        author: null
    }

    componentDidMount(){
        fetch(`http://localhost:9292/authors/${this.props.match.params.id}`)
        .then(response => response.json())
        .then((author) => {
            this.setState({ author })
        })
    }


    renderInfo = () => {
       const {author_name, birth_date, home_town, college, degree} = this.state.author

       const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px"
        }
    }
          return (
              <>
              <br />
              <div className="h1">Author's Corner</div>
              <br /> <br /> <br /> <br /> <br /> <br />
              <div className="cardPosition">
                <Card style={layout.card}>
                    <Image src={authorPhoto[Math.floor(Math.random()*authorPhoto.length)]} width="300" height="200"/>
                    <Card.Content className="bookDescription">
                         <header>
                            {author_name} 
                        </header>
                        <Card.Description>
                            {birth_date}
                            <br />
                            {home_town}
                            <br />
                            {college}
                            <br />
                            {degree}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content>
                            <div className="buttonPosition">
                                <Button><a href="http://localhost:3000/books">Back</a></Button>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
              
              </>
          )
          
             
    
    }

    render(){
        return(
            <div>
              { this.state.author ? this.renderInfo() : <Image src={gifPic} className="cardPosition"/> }
            </div>
        )
    }
}

export default IndividualAuthor;