import React from 'react'

class IndividualAuthor extends React.Component {

    state = {
        author: []
    }

    componentDidMount(){
        fetch(`http://localhost:9292/authors/${this.props.match.params.id}`)
        .then(response => response.json())
        .then((author) => {
            this.setState({ author })
        })
    }


    renderInfo = () => {
       this.state.author.map(a => {
          return <ul>
              <li>a.author_name</li> 
              <li>a.birth_date</li>
              <li>a.home_town</li>
              <li>a.college</li>
              <li>a.degree</li>
          </ul>
       })
    }

    render(){
        return(
            <div>
                {this.renderInfo()}
            </div>
        )
    }
}

export default IndividualAuthor;