import React from 'react'
import AuthorsCollection from './AuthorsCollection'
import { Container } from 'semantic-ui-react'


class Authors extends React.Component {
    
    state = {
        authors: [],
        renderedAuthors: [],
        currentPage: 1,
        cardsPerPage: 10,    
    }


    componentDidMount() {
        fetch('http://localhost:9292/authors')
        .then(response => response.json())
        .then(this.setInitialAuthors);
    }

    setInitialAuthors = (authorCollection) => {
        this.setState({
            authors: [...authorCollection],
            renderedAuthors: [...authorCollection]
        })
    }


    render() {
        return (
           <>
           <h1>Author's Catalog</h1>
            <Container>
                   <AuthorsCollection authors={this.state.renderedAuthors} />
            </Container>
           </> 
        );     
    }
}

export default Authors;