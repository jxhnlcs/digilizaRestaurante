<template>
  <div class="main-login">
    <div class="left-login">
      <div class="card-login">
        <form @submit.prevent="login" class="form">
          <h1>Faça login<br>Para fazer sua reserva</h1>
          <div class="input-container">
            <input type="email" id="username" v-model="username" required="required">
            <label for="input" class="label">Email</label>
          </div>
          <div class="input-container">
            <input type="password" id="password" v-model="password" name="senha" required="required">
            <label for="input" class="label">Senha</label>
          </div>
          <a @click="goToRegister">Não tem cadastro?</a>
          <button type="submit" class="btn-login">Login</button>
        </form>
      </div>
    </div>
    <div class="right-login">
      <img class="img" src="src/assets/img/prato.png" alt="Imagem prato">
    </div>
  </div>
</template>
  
<script>
import { set_cookie } from "../utils/cookies"
import { now_increase_interval } from "../utils/date"

export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).catch(err => {
        console.log(err)
      })
      if (response.ok) {
        Swal.fire(
          'Ok!',
          'Login bem-sucedido',
          'success'
        )
        const dados = await response.json()
        set_cookie('token', dados.token, {
          path: "/",
          secure: true,
          expire: now_increase_interval(1),
        });
        this.$router.push('/home');
        return
      }
      response.status === 401 ? Swal.fire(
        'Oops!',
        'Usuário ou senha invalidos',
        'error'
      ) : Swal.fire(
        'Oops!',
        'Erro ao fazer login!',
        'error'
      )
      this.username = ''
      this.password = ''
    },

    goToRegister() {
      this.$router.push('/register');
    },
  },
};
</script>
  
<style scoped>
/* Login Style */

.main-login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.right-login>img {
  width: 40vw;
  position: absolute;
  top: 25%;
  left: 60%;
}

.right-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.card-login>form>h1 {
  color: #000000;
  font-weight: 800;
  font-size: 50px;
  margin: 0;
}

.input-container {
  position: relative;
  margin-top: 40px;
  margin-bottom: 15px;
}

.input-container input[type="email"],
.input-container input[type="password"] {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 4px solid #000000;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: #000000;
  transition: all 0.3s ease;
  pointer-events: none;
  font-weight: bold;
}

.input-container input[type="email"]:focus~.label,
.input-container input[type="email"]:valid~.label {
  top: -20px;
  font-size: 16px;
  color: #2c2721;
}

.input-container input[type="password"]:focus~.label,
.input-container input[type="password"]:valid~.label {
  top: -20px;
  font-size: 16px;
  color: #2c2721;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #000000;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus~.underline,
.input-container input[type="text"]:valid~.underline {
  transform: scaleX(1);
}


.form>a {
  color: #000000de;
  font-weight: bold;
  cursor: pointer;
}

.form>a:hover {
  color: #A9865C;
  transition: 0.5s;
  font-size: 18px;
}

.btn-login {
  width: 100%;
  padding: 16px 0px;
  margin-top: 15px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  color: #ffffff;
  background: #000000;
  cursor: pointer;
}

.btn-login:hover {
  transition: all 0.5s;
  box-shadow: 0px 10px 40px -12px #00000052;
  color: #f6f6f6;
  background: #A9865C;
}

@media only screen and (max-width:950px) {
  .card-login {
    width: 85%;
  }
}

@media only screen and (max-width:600px) {
  .main-login {
    flex-direction: column;
  }

  .left-login>h1 {
    display: none;
  }

  .left-login {
    width: 100%;
    height: auto;
  }

  .right-login {
    width: 100%;
    height: auto;
  }

  .left-login-image {
    width: 50vw;
  }

  .card-login {
    width: 90%;
  }

  .img {
    display: none;
  }
}
</style>