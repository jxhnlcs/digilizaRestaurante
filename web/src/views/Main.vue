<template>
  <navbar />
  <section class="main-content">
    <div class="welcome">
        <h1 class="title-reserva">Bem-vindo</h1>
        <h2 class="text-reserva">Conheça nossos pratos!</h2>
    </div>
    <div class="categorias">
        <div class="categoriaTitle">
            <h1 class="categoriasTitle">Categorias</h1>
        </div>
        <div class="listCategorias">
            <div class="column">
                <img class="foodImage" src="src\assets\img\antipasto.jpg" alt="">
                <h1>Antipasto</h1>
            </div>
            <div class="column">
                <img class="foodImage" src="src\assets\img\primo.jpg" alt="">
                <h1>Primo Piatto</h1>
            </div>
            <div class="column">
                <img class="foodImage" src="src\assets\img\secondo.jpg" alt="">
                <h1>Secondo Piatto</h1>
            </div>
            <div class="column">
                <img class="foodImage" src="src\assets\img\desert.jpg" alt="">
                <h1>Dessert/Dolci</h1>
            </div>
        </div>
    </div>
    
    
    <div class="categorias">
        <div class="row">
            <div class="left-main">
                <h1 class="title-car">Faça já sua <span class="thex1">Reserva</span></h1>
                <p class="text-car">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget egestas lorem, facilisis mollis dolor. Suspendisse mollis quam turpis, sed dignissim ligula pellentesque dictum. Sed efficitur condimentum sem, et volutpat odio iaculis in. Quisque congue enim non nisi viverra pharetra.</p>
                <router-link :to="{path:'/home'}"><button href="#" class="btn">Clique para fazer sua reserva</button></router-link>
            </div>
            <div class="right-main">
                <img class="img-car" src="src/assets/img/jantar.jpg" alt="">
            </div>
        </div>
    </div>
  </section>

  <footer>
        <div class="bottom-details">
        <div class="bottom_text">
            <span class="copyright_text">Copyright © 2023 All rights reserved</span>
        </div>
        </div>
    </footer>
</template>

<script>

import navbar from '../components/navbar.vue';

export default{
    components: {
        navbar
    },
    
    methods:{
        goToLogin() {
        this.$router.push('/');
        },
    }
}

</script>

<style scoped>

/* Main content */

.main-content{
    background-color: #EEEAC4;
}

.main-content{
    display: flex;
    align-items: center;
    flex-direction: column;
}

.welcome{
    display: flex;
    align-items: center;
    flex-direction: column;
}


.listCategorias{
    display: flex;
    align-items: center;
}

.listCategorias .column{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    
}

.listCategorias .column h1{
    text-align: center;
    margin-right: 70px;
    cursor: default;
}

.categoriasTitle{
    font-size: 36px;
    margin-left: 40px;
}


.title-reserva{
    font-size: 60px;
    font-weight: bold;
    cursor: default;
    color: #FF7A00;
}


.text-reserva{
    margin-top: -20px;
    font-size: 35px;
    text-align: center;
    cursor: default;
}

.btn{
    margin-top: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: white;
    padding: 25px 50px;
    background-color: rgb(255, 0, 0);
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.btn:hover{
    transition: 0.5s;
    box-shadow:0 10px 10px rgba(0,0,0,.25);
    background-color: white;
    color: red;
}

.foodImage{
    width: 300px;
    border-radius: 50%;
    margin-right: 50px;
    box-shadow:0 10px 20px 10px rgba(0,0,0,.45);
    max-width: 100%;
}

.row{
    margin-top: 30px;
    display: flex;
}

.left-main{
    width: 50vw;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
.title-car{
    font-size: 40px;
    font-weight: bold;
    cursor: default;
}
.thex1{
    font-size: 40px;
    font-weight: bold;
    color: rgb(255, 0, 0);
    cursor: default;
}
.text-car{
    margin-top: -20px;
    font-size: 20px;
    font-weight: bold;
    cursor: default;
    text-align: justify;
}
.btn{
    margin-top: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: white;
    padding: 10px;
    background-color: rgb(255, 0, 0);
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.btn:hover{
  transition: 0.5s;
  box-shadow:0 4px 4px rgba(0,0,0,.15)
}
.right-main{
    width: 36vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.img-car{
    margin-top: 50px;
    width: 500px;
    border-radius: 30px;
    margin-bottom: 20px;
}

footer .bottom-details{
  width: 100%;
  background: #FBC402;
  display: flex;
  align-items: center;
}
footer .bottom-details .bottom_text{
  max-width: 1250px;
  margin: auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
}
.bottom-details .bottom_text span,
.bottom-details .bottom_text a{
  font-size: 14px;
  font-weight: 300;
  color: #000000;
  font-weight: bold;
  opacity: 0.8;
  text-decoration: none;
}
.bottom-details .bottom_text a:hover{
  opacity: 1;
  text-decoration: underline;
}
.bottom-details .bottom_text a{
  margin-right: 10px;
}

@media (max-width: 520px){
  footer::before{
    top: 145px;
  }
}


@media only screen and (max-width: 500px) {

    .main-content{
        width: 100vw;
    }

    .title-reserva{
        text-align: center;
        font-size: 50px;
    }

    .text-reserva{
        width: 90%;
    }

    .btn{
        margin-bottom: 10px;
        width: 90%;
        margin-left: 5%;
    }

    .categoriasTitle{
        text-align: center;
        margin-right: 30px;
    }

    .foodImage{
        margin-right: 40px;
    }

    .listCategorias{
        flex-direction: column;
    }

    .listCategorias .column h1{
        margin-right: 40px;
    }

    .main-content{
        height: 100%;
    }

    .img-car{
        display: none;
    }

    .left-main{
        margin-left: -10px;
        width: 80vw;
    }

    .right-main{
        width: 0vw;
    }
}
</style>