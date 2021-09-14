import React from 'react'
import authorPhoto from './AuthorsPhotos'
import { Card, Image } from 'semantic-ui-react'



class AuthorInfo extends React.Component {


    render() {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {author_name, birth_date, college, degree, home_town} = this.props.authors
       
       
        return (
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
          </Card>
        )
    }
}

export default AuthorInfo;