import React from 'react'

class AuthorBooks extends React.Component {

    state = {
        author: {}
    }

    componentDidMount(){
        fetch(`http://localhost:9292/books/${this.props.match.params.id}`)
        .then(response => response.json())
        .then((author) => {
            this.setState({ author })
        })
    }



    render() {
       
        return (
          <h1>{this.state.author.name}</h1>
               
        )
    }
}

export default AuthorBooks;