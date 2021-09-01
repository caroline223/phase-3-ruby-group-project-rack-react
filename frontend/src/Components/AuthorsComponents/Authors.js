import React from 'react'
import AuthorsSearch from './AuthorsSearch'
import AuthorsCollection from './AuthorsCollection'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'


class Authors extends React.Component {
    
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
        return this.state.authors.filter(author => author.last_name.toLowerCase().includes(input.toLowerCase())) 

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

    handleClickAuthors = event => {
        fetch('')
        .then(response => response.json())
        .then()
    }

    


    render() {

        return (
           <>
           <h1>Author's Catalog</h1>
            <AuthorsSearch handleSearchInput={this.handleSearchInput} />
            <br />
            <Container>
                   <AuthorsCollection authors={this.state.renderedAuthors} />
            </Container>
            <p>If your favorite author is not listed here, click below to send us a request!</p>
            <Link to="/aform">Author's Request</Link>
           </> 
        );     
    }
}

export default Authors;