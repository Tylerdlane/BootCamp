import React, { useState } from 'react'

const UserInputForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleInputChange = (event) => {
        console.log(event.target.value)

        setFormData({
            ...formData,
            //accessing the properties of the object
            [event.target.name]: event.target.value
        })
    }

    const onFormSubmit = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        console.log('I Submitted', formData)
      };

    return (
<>

        <form onSubmit={onFormSubmit}>
            <label for="firstName">
                First Name:
            </label>
            <input type="text" name="firstName" id="firstName" onChange={handleInputChange} value={formData.firstName} />
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" id="lastName" onChange={handleInputChange} value={formData.LastName}/>
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" id="email" onChange={handleInputChange} value={formData.email}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default UserInputForm