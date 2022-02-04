import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [result, showResult] = useState('');

    const validateForm = e => {
        e.preventDefault();        

        if(name.length === 0 || password.length === 0) {
            showResult('Validation error');
            return;
        }       

        if(checked) {
            let count = 0;

            for(let i = 0; i < email.length; i++) {
                if(email[i] === '@') {
                    count++;
                }
            }

            if(email.length === 0 || count === 0 || count > 1 || !email.includes('.')) {
                showResult('Validation error');
                return;
            }           
        }

        let object;

        if(checked) {
            object = {
                name,
                password,
                email
            }
        } else {
            object = {
                name,
                password
            }
        }
        showResult('Correct validation');     
        // console.log(object);   
    }

    return <form>
        <label htmlFor="name">Name:</label>
        <input type="text"
            id="name"
            value={name}
            onChange={ e => setName(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password"
            id="password"
            value={password} 
            onChange={ e => setPassword(e.target.value)} />
        <label htmlFor="newsletter">Subscribe to the newsletter:</label>
        <input type="checkbox" 
            id="newsletter" 
            onChange={ e => setChecked(e.target.checked)} />     
        {checked && <input type="email" value={email} onChange={ e => setEmail(e.target.value)} />}
        <button type="submit" onClick={validateForm}>Send</button>
        <p>{result}</p>
    </form>
    
};

export default Form;
