import { BACKGROUND_IMAGE } from "../utils/constants.js";
import Header from "./Header.js";
import LoginForm from "./LoginForm.js";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto md:object-none"
          src={BACKGROUND_IMAGE}
          alt="backgroundImage"
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
