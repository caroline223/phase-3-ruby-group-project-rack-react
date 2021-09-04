import React from 'react';
import { Form, Message } from 'semantic-ui-react';


const defaultState = {
    full_name: '',
    home_town: '',
    birth_date: '',
    genre: ''
}

class AuthorsForm extends React.Component {

    state = {...defaultState }

    handleOnChange = (event) => {
        console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault() 
        fetch('http://localhost:9292/arequests', this.configObject())
        .then(response => response.json())
        .then(data => this.props.history.push('/arequests'))
        this.setState( defaultState ) 
        alert("Your form has been successfully submitted!")
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
            <h1></h1>
            <Form onSubmit={this.handleFormSubmit}>
                <div > 
                <Form.Field>
                    <label >First Name</label>
                    <input 
                        placeholder="Full Name (Required)"
                        name="full_name"
                        value={this.state.full_name}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label >Hometown</label>
                    <input 
                        placeholder="City, State"
                        name="home_town"
                        value={this.state.home_town}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                    />
                </Form.Field>
                <Form.Field>
                    <label >Birthday</label>
                    <input 
                        placeholder="Birthday (Required)"
                        name="birth_date"
                        type="date"
                        value={this.state.birth_date}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label >Style of Genre</label>
                    <input 
                        placeholder="Genre (Required)"
                        name="genre"
                        value={this.state.genre}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                
                </div>
                <br />
               <Form.Field>
                    <Form.Button>Submit</Form.Button>
                    <br />
                    <Form.Button ><a href="http://localhost:3000/home"> Home </a></Form.Button>
                    <Form.Button ><a href="http://localhost:3000/authors"> Back </a></Form.Button>
               </Form.Field>
            </Form>
        </div>
    )
}

}

export default AuthorsForm;