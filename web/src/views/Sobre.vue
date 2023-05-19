<template>
<navbar />
    <section class='resume'>
        <h1>Sobre mim</h1>
            <div class="container-pic" data-aos="fade-up">
            <img src="src\assets\img\profilepic.jpg" id="prof-pic" alt="profile picture">
            <div class='resumeContainer'>
                <div class="resumeCenter">
                    <p class='text-center resume-text'>Olá eu sou o John, um desenvolvedor web entusiasmado com o
                        universo da tecnologia e suas possibilidades. Entrei na área a dois anos atrás, tendo construído habilidades de Programação Front/Back-End, Banco de Dados, UX/UI Design e Gestão de projetos. Desde então venho me esforçando todos os dias a aprender novas tecnologias e me aperfeiçoar cada vez mais para conseguir minha primeira oportunidade, atrelado a
                        uma forte habilidade em comunicação, relação interpessoal e liderança. </p>
                    <h2 class="resume-title">Resumo de qualificações</h2>
                    <ul class="core">
                        <li>Criatividade e excelente capacidade de comunicação;</li>
                        <li>Forte habilidade em liderança e resolução de problemas;</li>
                        <li>Familiaridade com desenvolvimento web, web design, desenvolvimento de aplicações mobile, UX/UI Design, Figma, Vue.js, React Native, HTML, CSS,
                        Javascript, Bootstrap, Python, Java, PHP, MySQL;</li>
                    </ul>
                    <h2 class="resume-title">Contato</h2>
                    <div class="contatoRow">
                        <a href="https://github.com/jxhnlcs" class="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
                        </svg>
                        <p class="text">Github</p>
                        </a>
                        <a href="https://www.linkedin.com/in/john-lucas-a23880208/" class="button">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                        <p class="text">Linkedin</p>
                        </a>
                    </div>
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
    }
}
</script>

<style scoped>

.resume{
    background-color: #EEEAC4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#prof-pic {
    width: 20vw;
    height: 18%;
    margin: 0 auto;
    border-radius: 50%;
}

.container-pic {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.resumeCenter{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.resume > h1 {
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  line-height:3rem;
  color: #222;
  margin-top:45px;
  
}

.resumeCenter ul{
    list-style: none;
    text-align: center;
    font-size: 20px;
    width: 50%;
}

.core {
  font-size: 14px;
  margin-right:20px;
  line-height: 2em;
}

.resume .resume-text{
  font-size:1.2rem;
  padding:10px 0 40px 0;
  line-height: 2em;
  width: 60%;
  text-align: justify;
}

.contatoRow{
    margin-top: 30px;
    display: flex;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #181717;
  outline: 3px #181717 solid;
  outline-offset: -3px;
  border-radius: 5px;
  margin-right: 30px;
  margin-left: 30px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  text-decoration: none;

  margin-bottom: 100px;
}

a .text {
  color: white;
  font-weight: 700;
  font-size: 1em;
  transition: 400ms;
}

a svg path {
  transition: 400ms;
}

a:hover {
  background-color: transparent;
}

a:hover .text {
  color: #181717;
}

a:hover svg path {
  fill: #181717;
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

@media only screen and (max-width:600px){

    #prof-pic {
    width: 70vw;
}

    .resume .resume-text{
        width: 90%;
    }
    .core{
        width: 100%;
    }
}

</style>