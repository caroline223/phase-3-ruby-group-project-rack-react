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

    setPageNum = (event, { activePage}) => {
        this.setState({currentPage : activePage})
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

    filterSearchById = (input) => {
        console.log(input)
        return this.state.authors.filter(author => author.id) 

    }

    handleSearchId = (event) => {
        this.setState({
            searchInput: event.target.value
        })

        if(event.target.value === '' ) {
            this.setState({ renderedAuthors: [...this.state.authors]})
        } else {
            this.setState({ renderedAuthors: this.filterSearchById(event.target.value)})
        }

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
            <p>If your favorite author is not listed here, fill out this request</p>
            <p>so that we could add them to our library</p>
            <Link to="/arequests">Request</Link>
           </> 
        );     
    }
}

export default Authors;