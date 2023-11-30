import { Link } from 'react-router-dom';
import FundoLogin from '../../assets/fundo-login.jpg';
import Logo from '../../assets/logo.png'
import "./style.css";

export function Login() {
    return(
    <div class="container">
    <div class="image-container">
      <img src={FundoLogin} />
      <div class="logo-container">
        <img src={Logo} />
      </div>
    </div>
    <div class="form-container">
        <p>Acessar o sistema</p>
    <form>
        <div className="inputContainer">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="inputContainer">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
        </div>

        <button className="button">
          <Link to="/home" className='link'>Entrar</Link>
        </button>
      </form>
    </div>
  </div>
)
}