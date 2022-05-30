import { useState } from "react";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const Login = ({setIslogged}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(username, password).then(
        () => {
          navigate("/todos");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
        
      );
      setIslogged(true)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
