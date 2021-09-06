import React from 'react'
import NewBookCollection from './NewBookCollection';
import NavBar from '../NavBar'


class NewBooks extends React.Component {
    
    state = { 
        novels: []       
    }


    componentDidMount() {
        fetch('http://localhost:9292/brequests')
        .then(response => response.json())
        .then(this.setNewBooks);
    }

   
    setNewBooks = (newCollection) => {
        this.setState({
           novels: [...newCollection] 
        })
    }
    
    render() {
        return (
            <>
            <NavBar />
                <NewBookCollection novels={this.state.novels} />
            </> 
        )
    }

    
}

export default NewBooks;