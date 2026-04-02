import { useState } from 'react'
import { FiEye, FiEyeOff } from "react-icons/fi"
import Astronauta from './assets/imagem-hero.jpg'
import GoogleIcon from './assets/google-icon.svg?react'
import FacebookIcon from './assets/facebook-icon.svg?react'

import './App.css'

function App() {

  const [showPassword, setShowPassword] = useState(false)
  

  return (
   
   <div className="container">
    <div className='img-container'>
      <img src= {Astronauta} alt="" />
    </div>
    
    <div className='login-container'>
      <h2 className='login-logo'>Login.
        <span>UI</span>
      </h2>

      <div className='cointainer-form'>
        <form>

          <div className='input-email'>
            <span>Email</span>
            <input name='Email' type="text" placeholder='Digite seu email' />
          </div>

          <div className="input-password">
            <span>Senha</span>

           <div className="input-wrapper">
              <input 
              name='Password' 
              type={showPassword ? "text" : "password"} 
              placeholder='Digite sua senha' 
              />

              <button 
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(prev => !prev)}
              >
              {showPassword ? <FiEyeOff className="icon-eye" /> 
                            : <FiEye className="icon-eye" /> }
              </button>
            </div>
          </div>

          <div className='container-lembrar-senha'>
            <input type="checkbox" id='check-box' />
            <label htmlFor="check-box">Lembrar senha</label>
          </div>

          <div className="button-container">
            <a href="" target='new_blank'><button className='login-button'>Entrar</button></a>
          </div>
        </form>
      </div>

      <div className='recover-password'>
        <p className="password-text">Esqueceu sua senha? 
          <a className='link-recover-password' href="#">Recuperar Senha</a>
        </p>

        
        <div className="alternate-login">
          <span>Ou entre com:</span>

          <div className="icons-logins">
            <button><GoogleIcon className="icon-svg" /></button>
            <button><FacebookIcon className="icon-svg" /></button>
        </div>

        </div>
      </div>

    </div>
   </div>
  )
}

export default App
