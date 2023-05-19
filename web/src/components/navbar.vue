<template>
    <header>
        <div class="header-left">
            <div class="logo">
                <h2>Nostrale</h2>
            </div>
            <nav>
                <ul>
                    <router-link class="router" :to="{path:'/main'}">
                    <li>
                        <a href="">Início</a>
                    </li>
                </router-link>
                <router-link class="router" :to="{path:'/home'}">
                    <li>
                        <a href="">Reserva</a>
                    </li>
                </router-link>
                <router-link class="router" :to="{path:'/sobre'}">
                    <li>
                        <a href="">Sobre</a>
                    </li>
                </router-link>
                </ul>
                <div class="login-signup">
                    <router-link :to="{path:'/'}"><a href="">Sair</a></router-link>
                </div>
            </nav>
        </div>
        <div class="header-right">
            <div class="login-signup">
                <router-link :to="{path:'/'}"><a @click="goToLogin" href="">Sair</a></router-link> 
            </div>
            <div class="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </header>
</template>

<script>

export default{
    methods:{
        goToLogin() {
        this.$router.push('/');
        },
    },

    mounted(){
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    hamburger.onclick = function() {
        nav.classList.toggle("active");
}
    }
}

</script>

<style scoped>

/* Nav */

img {
    width: 100%;
}

header {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    background: #FBC402;
}

header .header-left {
    display: flex;
    align-items: center;
    z-index: 100;
}

.logo h2{
    cursor: default;
}

header .header-left nav {
    margin-left: 50px;
}

header .header-left nav ul {
    display: flex;
    text-decoration: none;
    margin-right: 30px;
}

nav ul li a {
    display: block;
    color: #000000;
    font-size: 18px;
    padding: 5px 10px;
    transition: 0.2s;
    text-decoration: none;
    font-weight: bold;
    margin-right: 10px;
}

nav ul li a:hover,
nav ul li a.active {
    color: #ffffff;
    background-color: black;
    border-radius: 10px;
}

ul {
    list-style-type: none;
}

nav .login-signup {
    display: none;
}

header .header-right {
    display: flex;
    align-items: center;
}

header .login-signup {
    color: #cfd9e0;
    font-weight: bold;
}

.router{
    text-decoration: none;
}

header .login-signup a {
    display: inline-block;
    color: #ffffff;
    background: #000000;
    padding: 5px 12px;
    border-radius: 5px;
    text-decoration: none;
}

header .login-signup a:hover {
    transition: 0.5s;
    color: #020202;
    background: #ffffff;
}

header .login-signup span {
    display: inline-block;
    color: #ffffff;
    padding: 5px 12px;
    font-weight: bold;
    cursor: default;
}

header .header-right .hamburger {
    margin-left: 20px;
    cursor: pointer;
    display: none;
}

header .header-right .hamburger div {
    width: 30px;
    height: 2px;
    margin: 6px 0;
    background: #fff;
}

@media only screen and (max-width: 1000px) {
    header {
        padding: 0 20px;
    }

    header .header-right .hamburger {
        display: block;
    }

    header .header-left nav {
        margin: 0;
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: fit-content;
        background-color: #FBC402;
        padding: 30px;
        transition: 0.3s;
        text-align: center;
        z-index: -1;
    }

    header .header-left nav.active {
        top: 70px;
    }

    header .header-left nav ul {
        display: block;
    }
}

@media only screen and (max-width: 500px) {
    nav .login-signup {
        display: block;
        margin-top: 20px;
    }

    header .header-right .login-signup {
        display: none;
    }
}

</style>