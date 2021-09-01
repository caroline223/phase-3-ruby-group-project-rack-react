import React from 'react'
import authorPhoto from './AuthorsPhotos'
import { Card, Image } from 'semantic-ui-react'


class AuthorsInfo extends React.Component {

    render() {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        const {first_name, last_name, birth_date, college, degree, birth_city, birth_state } = this.props.authors
        return (
          <Card style={layout.card}>
              <Image src={authorPhoto[Math.floor(Math.random()*authorPhoto.length)]} width="360" height="200"/>
              <Card.Content >
                  <Card.Header>
                      {first_name} {last_name}
                  </Card.Header>
                  <Card.Description>
                      {birth_date}
                      <br />
                      {birth_city}
                      <br />
                      {birth_state}
                      <br />
                      {college}
                      <br />
                      {degree}
                  </Card.Description>
                  <button>Books</button>
              </Card.Content>
          </Card>
        )
    }
}

export default AuthorsInfo;