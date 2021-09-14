import React from 'react' 
import AuthorInfo from './AuthorInfo'
import { Card } from 'semantic-ui-react'


class AuthorCollection extends React.Component {

    render() {
        return (
            <div>
                <Card.Group itemsPerRow={4}>
                    {this.props.authors.map((authorObj, id) => <AuthorInfo key={id} authors={authorObj} />)}
                </Card.Group>
            </div>
        )
    }

}

export default AuthorCollection;