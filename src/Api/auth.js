import { toast } from 'react-toastify';
import {
  loggingUser,
  loginUserSuccess,
  logout
} from '../redux/actions';


export const loginUser = (data) => {
  return (dispatch) => {
        dispatch(loggingUser());
        localStorage.setItem('token', "123456");
        localStorage.setItem('userData', JSON.stringify(data));
        dispatch(loginUserSuccess(data));
        toast.success("logged successfully");
        return data;
      
  };
};
export const logoutUser = () => {
  return (dispatch) => {
   localStorage.clear();
    dispatch(logout());
    toast.success("logged out successfully");
  
};
};