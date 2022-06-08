import {Link} from "react-router-dom";


const Signup=()=>{

    return(
        <div className="auth-container">
        <div className="auth-contain">
          <h2>Sign-up</h2>
          <lable htmlFor="email">
            Email Address
            <input
              type="email"
              placeholder="abcd@gmail.com"
              className="auth-detail-input"
            />
          </lable>
          <lable htmlFor="First Name">
            First Name
            <input
              type="text"
              placeholder="First Name"
              className="auth-detail-input"
            />
          </lable>
          <lable htmlFor="Last Name">
            Last Name
            <input
              type="text"
              placeholder="Last Name"
              className="auth-detail-input"
            />
          </lable>
          <lable htmlFor="New password">
            New Password
            <input
              type="password"
              placeholder="*********"
              className="auth-detail-input"
            />
          </lable>
          <lable htmlFor=" Confirm password">
            Confirm Password
            <input
              type="password"
              placeholder="**********"
              className="auth-detail-input"
            />
          </lable>
          <lable htmlFor="term & conditions">
            <input type="checkbox" className="checkbox-remember-conditions" />
            I accept all Term & Conditions
          </lable>
          <button className="loginbtn-createAcount">Create New Account</button>
          <Link to="/login">
          <button className="createBtn-alreadyBtn">Already have an Account </button>
          </Link>
        </div>
      </div>
    );
  
}
export default Signup;