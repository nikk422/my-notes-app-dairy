import { useAuth } from "../../../Context/Auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import {Link} from "react-router-dom";

const Login = () => {
  const { setLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = () => {
    setLogin((Login) => !Login);
    navigate(location.state.from.pathname);
  };

  return (
    <div className="auth-container">
      <div className="auth-contain">
        <h2>Login</h2>
        <lable htmlFor="email">
          Enter your Email
          <input
            type="email"
            placeholder="Enter your Email"
            className="auth-detail-input"
          />
        </lable>
        <lable htmlFor="password">
          Enter your password
          <input
            type="password"
            placeholder="Enter your Password"
            className="auth-detail-input"
          />
        </lable>
        <lable htmlFor="remember">
          <input type="checkbox" className="checkbox-remember" />
          Remember me
          <a className="forgetLink" href="/">
            Forgot your Password ?
          </a>
        </lable>
        <button className="loginbtn-createAcount">Login</button>
        <button className="login-guest" onClick={loginHandler}>Login as Guest</button>
        <Link to="/signup">
        <button className="createBtn-alreadyBtn">Create New Account </button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
