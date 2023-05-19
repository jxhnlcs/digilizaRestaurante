<template>

<div class="main-login">
  <div class="left-login">
    <div class="card-login">
      <form @submit.prevent="register" class="form">
        <h1>Faça já seu cadastro<br>E faça sua reserva</h1>
        <div class="input-container">
            <input type="text" id="name" v-model="name" required="required">
            <label class="label" for="name">Nome</label>
        </div>
        <div class="input-container">
            <input type="email" id="username" v-model="username" required="required">
            <label class="label" for="username">Email</label>
        </div>
        <div class="input-container">
            <input type="password" id="password" v-model="password" name="senha" required="required">
            <label class="label" for="password">Senha</label>
        </div>
        <a @click="goToLogin">Já tem cadastro? Clique aqui</a>
        <button type="submit" class="btn-login">Cadastro</button>
      </form>
    </div>
  </div>
    <div class="right-login">
      <img class="img" src="src/assets/img/prato.png" alt="Imagem prato">
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      name: '',
      username: '',
      password: '',
      message: '',
    };
  },
  methods: {
    register() {
      const data = {
        name: this.name,
        username: this.username,
        password: this.password,
      };

      fetch(`${import.meta.env.VITE_API_URL}api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            Swal.fire(
            'Ok!',
            'Cadastro realizado com sucesso',
            'success'
          )
          this.$router.push('/');
          }
            else {
              Swal.fire(
            'Erro!',
            'Erro ao realizar cadastro',
            'error'
          )
          }
        })
        .catch((error) => {
          console.error('Erro ao realizar cadastro:', error);
          this.message = 'Erro ao realizar cadastro.';
        });
        this.username = ''
        this.password = ''
        this.name = ''
    },
    goToLogin() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Login Style */

.main-login{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-login{
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-login > form > h1{
    color: #000000;
    font-weight: 800;
    font-size: 50px;
    margin: 0;
}

.right-login{
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.right-login > img{
    width: 40vw;
    position: absolute;
    top: 25%;
    left: 60%;
}

.input-container {
    position: relative;
    margin-top: 40px;
    margin-bottom: 15px;
  }
  
  .input-container input[type="email"], .input-container input[type="password"], .input-container input[type="text"] {
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
  
  .input-container input[type="email"]:focus ~ .label,
  .input-container input[type="email"]:valid ~ .label {
    top: -20px;
    font-size: 16px;
    color: #2c2721;
  }

  .input-container input[type="password"]:focus ~ .label,
  .input-container input[type="password"]:valid ~ .label {
    top: -20px;
    font-size: 16px;
    color: #2c2721;
  }

  .input-container input[type="text"]:focus ~ .label,
  .input-container input[type="text"]:valid ~ .label {
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
  
  .input-container input[type="text"]:focus ~ .underline,
  .input-container input[type="text"]:valid ~ .underline {
    transform: scaleX(1);
  }
  

.form > a{
    color: #000000de;
    font-weight: bold;
    cursor: pointer;
}

.form > a:hover{
    color: #A9865C;
    transition: 0.5s;
    font-size: 18px;
}

.btn-login{
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

.btn-login:hover{
    transition: all 0.5s;
    box-shadow: 0px 10px 40px -12px #00000052;
    color: #f6f6f6;
    background: #A9865C;
}

@media only screen and (max-width:950px){
    .card-login{
        width: 85%;
    }
}

@media only screen and (max-width:600px){
    .main-login{
        flex-direction: column;
    }
    .left-login > h1{
        display: none;
    }
    .left-login{
        width: 100%;
        height: auto;
    }
    .right-login{
        width: 100%;
        height: auto;
    }
    .left-login-image{
        width: 50vw;
    }
    .card-login{
        width: 90%;
    }

    .img{
        display: none;
    }
}

</style>