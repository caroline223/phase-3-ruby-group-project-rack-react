import React from 'react'
import { Form } from 'semantic-ui-react'

const defaultState = {
    image_url: null,
    title: '',
    genre: '',
    publishing_date: '',
    rating: '',
    author_name: '',
}


class BooksForm extends React.Component{

    state = {...defaultState}


    handleOnChange = (event) => {
        console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        alert("Your form has been successfully submitted!")
        fetch('http://localhost:9292/brequests', this.configObject())
        .then(response => response.json())
        .then(data => this.props.history.push('/brequests'))
        this.setState(defaultState)
    }

    configObject = () => {
        return {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    }
    

render() {
    return (
        <div >
            <br />
            <Form onSubmit={this.handleFormSubmit}>
                <div > 
                <Form.Field>
                    <label>Title</label>
                    <input 
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                     <label >Author's Full Name</label>
                     <input 
                        placeholder="Full Name"
                        name="author_name"
                        value={this.state.author_name}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                     <label>Rating</label>
                    <input 
                        placeholder="Enter a number from 1 - 10"
                        name="rating"
                        value={this.state.rating}
                        type="number"
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                    
                </Form.Field>
                <Form.Field>
                    <label >Genre</label>
                    <input 
                        placeholder="Genre"
                        name="genre"
                        value={this.state.genre}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label >Date of Publish</label>
                    <input 
                        placeholder="Date"
                        name="publishing_date"
                        value={this.state.publishing_date}
                        type="date"
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                </div>
                <br />
               <Form.Field>
                    <Form.Button >Submit</Form.Button>
                     <Form.Button ><a href="http://localhost:3000/home"> Home </a></Form.Button>
                    <Form.Button ><a href="http://localhost:3000/books"> Back </a></Form.Button>
               </Form.Field>
                   
            
            </Form>
        </div>
    )
}



}
export default BooksForm;