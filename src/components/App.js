import React, { useState } from 'react';

const usersData = [
  { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
  { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
  { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
];

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = () => {
    // Simulating asynchronous login process
    setTimeout(() => {
      const user = usersData.find(u => u.email === email);

      if (user) {
        if (user.password === password) {
          console.log(user);
        } else {
          setPasswordError('Password Incorrect');
        }
      } else {
        setUserError('User not found');
      }
    }, 3000);
  };

  return (
    <div>
      <div>
        <label>Email:</label>
        <input
          id="input-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span id="user-error">{userError}</span>
      </div>
      <div>
        <label>Password:</label>
        <input
          id="input-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span id="password-error">{passwordError}</span>
      </div>
      <button id="submit-form-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
