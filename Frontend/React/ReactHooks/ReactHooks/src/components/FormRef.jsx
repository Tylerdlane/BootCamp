import e from 'cors';
import {useState, useRef} from 'react'

function FormRef() {
    const inputRef = useRef(null);//set intial to null
    const [value, setValue]= useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:' , value);
        setValue('');// when form is submitted we lose focus of the input field
        inputRef.current.focus();// By Having a ref to our input we can call the focus method to keep focus after form is submitted 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                type="text"
                ref={inputRef} //add ref to our input here
                value={value}
                onChange={ (e) => setValue(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormRef