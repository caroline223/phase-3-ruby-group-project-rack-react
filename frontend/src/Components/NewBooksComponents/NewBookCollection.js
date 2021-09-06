import React from 'react' 
import NewBooksInfo from './NewBooksInfo';
import { Card } from 'semantic-ui-react'


class NewBookCollection extends React.Component {

    render() {
        return (
            <div>
                <Card.Group itemsPerRow={3}>
                    {this.props.novels.map((novelObj, id) => <NewBooksInfo key={id} novels={novelObj} />)}
                </Card.Group>
            </div>
        )
    }

}

export default NewBookCollection;