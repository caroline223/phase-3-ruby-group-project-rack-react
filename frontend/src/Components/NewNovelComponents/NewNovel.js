import React from 'react'
import NewNovelCollection from './NewNovelCollection';
import { Container } from 'semantic-ui-react';

class NewNovel extends React.Component {
    
    state = { 
        novel: []       
    }


    componentDidMount() {
        fetch('http://localhost:9292/brequest')
        .then(response => response.json())
        .then(this.setNewNovel);
    } 

   
    setNewNovel = (newCollection) => {
        this.setState({
           novel: [...newCollection] 
        })
    }

    deleteNovel = (id) => {
        console.log(id)
        const newNovel = this.state.novel.filter(b => b.id !== id)

        this.setState({
          novel: newNovel
        })
    
    }
 
    render() {
        return (
            <>
            
           <Container>
                <NewNovelCollection novel={this.state.novel}  deleteNovel={this.deleteNovel} />
           </Container>
                
            </> 
        )
    }

    
}

export default NewNovel;