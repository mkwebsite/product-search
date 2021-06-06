import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser} from '../Api';
import { useHistory } from 'react-router-dom';

const LoginPage = () =>{
    const history = useHistory();
    let data = {
        name : "pramod",
        id : "1"
    }
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);

    const handleClick = ()=>{
        dispatch(loginUser(data));
    };
    useEffect(() => {
        if (isAuthenticated) {
          history.push('/');
        }
      }, [isAuthenticated,history]);
  return (
    <div className="App">
      <header className="App-header">
        <img src="/assets/logo.svg" className="App-logo" alt="logo" />
        <p>
         LOGIN PAGE
        </p>
        <button onClick={handleClick}>Click to login</button>
      </header>
    </div>
  );
}

export default LoginPage;
