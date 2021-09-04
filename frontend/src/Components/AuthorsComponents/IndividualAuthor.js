import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import authorPhoto from './AuthorsPhotos'

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
              <Card style={layout.card}>
                <Image src={authorPhoto[Math.floor(Math.random()*authorPhoto.length)]} width="300" height="200"/>
                    <Card.Content>
                        <Card.Header>
                            {author_name}
                        </Card.Header>
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
             </Card>
              </>
          )
          
             
    
    }

    render(){
        return(
            <div>
              { this.state.author ? this.renderInfo() : <p>Loading...</p> }
            </div>
        )
    }
}

export default IndividualAuthor;