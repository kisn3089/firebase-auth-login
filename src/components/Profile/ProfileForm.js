import { useRef, useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInput = useRef();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    setIsLoading(true);

    const enteredValue = newPasswordInput.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD3RlYr5tiNn6OzQPVuPpJzLZM39elCgM0', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredValue,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setIsLoading(false);
      if(res.ok) {
        alert("비밀번호가 변경되었습니다.");
        history.replace('/');
      } 
    }).catch(err => {
      alert(err.message);
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInput} />
      </div>
      <div className={classes.action}>
        {!isLoading && <button>Change Password</button>}
        {isLoading && <p>Sending Request..</p>}
      </div>
    </form>
  );
}

export default ProfileForm;
