import React from 'react'
import AuthorsSearch from './AuthorSearch'
import AuthorCollection from './AuthorCollection'
import { Container } from 'semantic-ui-react'
import NavBar from '../NavBar'


class Author extends React.Component {
    
    state = {
        authors: [],
        renderedAuthors: [],
            
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

    filterSearchByInput = (input) => {
        console.log(input)
        return this.state.authors.filter(author => author.author_name.toLowerCase().includes(input.toLowerCase())) 

    }

    handleSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value
        })

        if(event.target.value === '' ) {
            this.setState({ renderedAuthors: [...this.state.authors]})
        } else {
            this.setState({ renderedAuthors: this.filterSearchByInput(event.target.value)})
        }

    }
    


    render() {

        return (
           <>
           <NavBar />
           <div className="h1">
                Featured Authors
            </div>
                 <br /><br />
            <AuthorsSearch handleSearchInput={this.handleSearchInput} />
            <br />
            <Container>
                   <AuthorCollection authors={this.state.renderedAuthors} />
            </Container>
           </> 
        );     
    }
}

export default Author;