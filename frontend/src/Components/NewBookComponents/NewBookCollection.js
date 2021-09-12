import React from 'react' 
import NewBookInfo from './NewBookInfo';
import { Card } from 'semantic-ui-react'


class NewBookCollection extends React.Component {

    render() {
        return (
            <div>
                <Card.Group itemsPerRow={4}>
                    {this.props.novel.map((novel) => <NewBookInfo key={novel.id} novel={novel}  />)}
                </Card.Group>
            </div>
        )
    }

}

export default NewBookCollection;