import React, { useState } from 'react';

const Exce2 = () => {
    const [email, setEmail] = useState("");

    function validate() {
        
    }

    return (
        <div>
            <label htmlFor="email">Enter your email:</label>
            <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={validate}>Submit</button>
        </div>
    );
};

export default Exce2;
