import React from 'react';
import styles from './Form.module.css'

export function validate(input) {
  let errors = {};
  let regexUser = /\S+@\w+.\w+/;
  let regexPass = /(?=.*[0-9])/;
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!regexUser.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if ((!regexPass.test(input.password))) {
    errors.password = 'Password is invalid';
  }
  return errors;
}

export default function Form() {

  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    setInput((input) => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      }
      const errors = validate(newInput);
      setErrors(errors);

      return newInput;
    });
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          style={{ margin: 20 }}
          className={errors.username && "danger"}
          // className={styles.input}
          value={input.username}
          type="text"
          name='username'
          placeholder='Username'
          onChange={handleInputChange}
        />
        {errors.username && <p className='danger'> {errors.username} </p>}
        <br></br>
        <label>Password:</label>
        <input
          className={errors.password && "danger"}
          style={{ margin: 20 }}
          value={input.password}
          type="password"
          name='password'
          placeholder='Password'
          onChange={handleInputChange}
        />
        {errors.password && <p className='danger'> {errors.password} </p>}
        <br></br>
        <button disabled={errors.username || errors.password ? true : false} className={styles.btn} ><strong> Submit </strong></button>

      </div>
    </form >
  )
}
