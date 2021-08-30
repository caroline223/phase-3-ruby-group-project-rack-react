import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {


    render() {

        return(
            <div>
                <h1>Sunnyville Public Library</h1>
                <h3>Welcome!</h3>
                <p>Please choose an option below to search for books!</p>
                <Container>
                    <Card>
                        <Card.Content>
                            <Link to={"/books"}>Books</Link>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Link to={"/authors"}>Authors</Link>
                        </Card.Content>
                    </Card>
                </Container>
            </div>
        )
     }

}
export default HomePage;