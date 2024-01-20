import { BACKGROUND_IMAGE } from "../utils/constants.js";
import Header from "./Header.js";
import LoginForm from "./LoginForm.js";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="backgroundImage" />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
