import React from 'react'
import { Card, Container, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class HomePage extends React.Component {


    render() {

        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }

        return(
            <div>
                <h1>Sunnyville Public Library</h1>
                <h3>Welcome!</h3>
                <p>Please choose an option below to search for books!</p>
                <Container>
                    <Card style={layout.card}>
                        <Card.Content>
                            <Link to={"/books"}>Books</Link>
                        </Card.Content>
                    </Card>
                    <Card style={layout.card}>
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