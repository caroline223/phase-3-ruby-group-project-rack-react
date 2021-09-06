import React from 'react'
import authorPhoto from './AuthorsPhotos'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class AuthorsInfo extends React.Component {



    render() {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {id, author_name, birth_date, college, degree, home_town} = this.props.authors
       
       
        return (
          <Card style={layout.card}>
              <Image src={authorPhoto[Math.floor(Math.random()*authorPhoto.length)]} width="300" height="200"/>
              <Card.Content >
                  <Card.Header>
                      <Link to={`books/${id}`}>{author_name}</Link>
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
        )
    }
}

export default AuthorsInfo;