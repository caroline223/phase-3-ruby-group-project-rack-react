import React from 'react';
import { Form } from 'semantic-ui-react';

const defaultState = {
    url: '',
    first_name: '',
    last_name: '',
    birth_city: '',
    birth_state: '',
    birth_date: '',
    college: '',
    degree: '',
}


class AuthorsForm extends React.Component {

    state = {...defaultState}


    handleOnChange = (event) => {
        console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }

    handleFormSubmit = (event) => {
        alert("Your form has been submitted!")
        event.preventDefault()
        fetch('http://localhost:9292/arequests', this.configObject())
        .then(response => response.json())
        .then(data => this.state.history.push('/arequests'))
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
            <h1></h1>
            <Form onSubmit={this.handleFormSubmit}>
                <div > 
                <Form.Field>
                    <label >Picture</label>
                    <input
                        placeholder="url"
                        name="url"
                        value={this.state.url}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                    />
                </Form.Field>
                <Form.Field>
                    <label >First Name</label>
                    <input 
                        placeholder="First Name (Required)"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                     <label >Last Name</label>
                    <input 
                        placeholder="Last Name (Required)"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label >Hometown</label>
                    <input 
                        placeholder="City"
                        name="birth_city"
                        value={this.state.birth_city}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                    />
                    <input 
                        placeholder="State"
                        name="birth_state"
                        value={this.state.birth_state}
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
                    <label >College Attended</label>
                    <input 
                        placeholder="College"
                        name="college"
                        value={this.state.college}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Degree Earned</label>
                    <input 
                        placeholder="Degree"
                        name="degree"
                        value={this.state.degree}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                    />
                </Form.Field>
                </div>
                <br />
               <Form.Field>
                    <Form.Button >Submit</Form.Button>
                    <Form.Button ><a href="http://localhost:3000/authors"> Back </a></Form.Button>
                    <Form.Button ><a href="http://localhost:3000/home"> Home </a></Form.Button>
               </Form.Field>
                   
            
            </Form>
        </div>
    )
}

}

export default AuthorsForm;