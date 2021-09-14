import React from 'react' 
import NewNovelInfo from './NewNovelInfo';
import { Card } from 'semantic-ui-react'


class NewNovelCollection extends React.Component {

    render() {
        return (
            <div>
                <Card.Group itemsPerRow={4}>
                    {this.props.novel.map((n) => <NewNovelInfo key={n.id} novel={n} deleteNovel={this.props.deleteNovel} />)}
                </Card.Group>
            </div>
        )
    }

}

export default NewNovelCollection;