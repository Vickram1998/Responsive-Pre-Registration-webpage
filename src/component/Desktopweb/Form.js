import React, { useState } from 'react';
import './Form.css'
import { createPerson, getApiError } from '../Api/ApiUtils';
export default function Form() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please Enter a Valid Email Address');
      return
    } 
    createPerson(email)
    .then(response => {
              if (response.success) {
                  console.log('success')
              }else{
                  setError(getApiError(response))
              } 
          })
          setEmail('')
          setError('')
  };

  return (
    <div>
      <div className='desktop-form'>
            {error && <div className='error-msg'><i className="fa-sharp fa-solid fa-ban fa-bounce fa-2xl" style={{ marginLeft:"200px",color: "#d50707"}}></i><div className="error-text">{error}</div></div>}
        <form method='post' target='#' onSubmit={handleSubmit}>
          <div>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value) } onKeyDown={handleKeyDown} placeholder='Enter Your Email' />
            <button type='submit'><i className="fas fa-greater-than" style={{ color: 'white' }}></i></button>
          </div>
        </form>
      </div>
    </div>
  );
}
