import React from 'react';
import { Form } from 'semantic-ui-react';


const defaultState = {
    first_name: '',
    last_name: '',
    birth_city:'',
    birth_state: '',
    birth_date: '',
    college: '',
    degree: '',
    image_url: ''
}

class AuthorsForm extends React.Component {

    state = {...defaultState }

    handleOnChange = (event) => {
        console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault() 
        fetch('http://localhost:9292/authors', this.configObject())
        .then(response => response.json())
        .then(data => this.props.history.push('/authors'))
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
            <Form onSubmit={this.handleFormSubmit}>
                <div > 
                <Form.Field>
                <label>Image URL</label>
                    <input 
                        placeholder="URL"
                        name="image_url"
                        value={this.state.image_url}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field> 
                    <label >Full Name</label>
                    <input 
                        placeholder="First Name"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                     <input 
                        placeholder="Last Name"
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
                        required
                    />
                    <input 
                        placeholder="State"
                        name="birth_state"
                        value={this.state.birth_state}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label >Birthday</label>
                    <input 
                        placeholder="Birthday"
                        name="birth_date"
                        type="date"
                        value={this.state.birth_date}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label >Education</label>
                    <input 
                        placeholder="College Attended"
                        name="college"
                        value={this.state.college}
                        onChange={this.handleOnChange}
                        style={{width: "100%"}}
                        required
                    />
                     <input 
                        placeholder="Degree Obtained"
                        name="degree"
                        value={this.state.degree}
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