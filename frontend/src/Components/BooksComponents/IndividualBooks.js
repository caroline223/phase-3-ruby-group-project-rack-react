import React from 'react'

class IndividualBooks extends React.Component {

    state = {
        book: {}
    }

    componentDidMount(){
        fetch(`http://localhost:9292/books/${this.props.match.params.id}`)
        .then(response => response.json())
        .then((book) => {
            this.setState({ book })
        })
    }


    renderInfo = () => {
       const {title, genre, rating, author_name, publishing_date} = this.state.book
          return <ul>
              <li>{title}</li> 
              <li>{author_name}</li>
              <li>{genre}</li>
              <li>{rating}/10</li>
              <li>{publishing_date}</li>
          </ul>
    
    }

    render(){
        return(
            <div>
              { this.state.book ? this.renderInfo() : <p>Loading...</p> }
            </div>
        )
    }
}

export default IndividualBooks;