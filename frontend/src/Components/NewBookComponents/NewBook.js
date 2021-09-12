import React from 'react'
import NewBookCollection from './NewBookCollection';
import { Container } from 'semantic-ui-react';

class NewBook extends React.Component {
    
    state = { 
        novel: []       
    }


    componentDidMount() {
        fetch('http://localhost:9292/brequest')
        .then(response => response.json())
        .then(this.setNewBook);
    } 

   
    setNewBook = (newCollection) => {
        this.setState({
           novel: [...newCollection] 
        })
    }
 
    render() {
        return (
            <>
            
           <Container>
                <NewBookCollection novel={this.state.novel}  />
           </Container>
                
            </> 
        )
    }

    
}

export default NewBook;