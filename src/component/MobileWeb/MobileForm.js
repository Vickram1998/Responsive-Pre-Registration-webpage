import React, { useState } from 'react';
import './MobileForm.css'
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
    } else {
      setEmail('');
      setError('');
    }
  };

  return (
    <div>
      <div className='mobile-form'>
            {error && <div className='mobile-error-msg'><i className="fa-sharp fa-solid fa-ban fa-bounce fa-2xl" style={{ marginLeft:"50px",color: "#d50707"}}></i><div className="error-text">{error}</div></div>}
        <form onSubmit={handleSubmit}>
          <div>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value) } onKeyDown={handleKeyDown} placeholder='Enter Your Email' />
            <button type='submit'><i className="fas fa-greater-than" style={{ color: 'white' }}></i></button>
          </div>
        </form>
      </div>
    </div>
  );
}
