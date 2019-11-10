import React from 'react'
import { Button } from '../../components'
import './style.css'
const Login = ({
  handleChange,
  handleSubmit,
}) => {

  return (
    <div>
    <h2>Faça o login ou cadastre-se</h2>
    <div className="loginWrapper">
      <div className="formLogin">
        <h3>Sou cadastrado</h3>
        <form className="loginForm">
          <div className="loginFormGroup">
            <label className="loginLabel">
              usuário
            </label>
            <input
              name='username'
              onChange={handleChange}
              className="loginInput"
            />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Senha
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="loginInput"
            />
          </div>
          <div>
            <Button
              onClick={() => handleSubmit('login')}
              classStyle="btnPrimary"
            >
              Logar
            </Button>
          </div>
        </form>
      </div>
      <div className="lineRight"/>
      <div className="formLogin">
        <h3>Criar cadastrado</h3>
        <form className="loginForm">
          <div className="loginFormGroup">
            <label className="loginLabel">
              Nome completo
            </label>
            <input
              className="loginInput"
              name="fullName"
              onChange={handleChange}
            />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Telefone
            </label>
            <input
              className="loginInput"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <h3>Endereço</h3>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Cep
            </label>
            <input
              className="loginInput"
              name="zipcode"
              onChange={handleChange}
            />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Rua
            </label>
            <input
              className="loginInput"
              name="street"
              onChange={handleChange}
            />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Número
            </label>
            <input
              className="loginInput"
              name="street_number"
              onChange={handleChange}
            />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Cidade
            </label>
            <input className="loginInput" />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Estado
            </label>
            <input
              className="loginInput"
              name="state"
              onChange={handleChange}
            />
          </div>
          <h3>Login de acesso</h3>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Usuário
            </label>
            <input
              className="loginInput"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Senha
            </label>
            <input
              className="loginInput"
              name="password"
              onChange={handleChange}
            />
          </div>
          <Button
            onClick={() => handleSubmit('add')}
            classStyle="btnPrimary"
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
