<template>
  <navbar />
  <div class="bodyReserva">
    <div class="reservaContainer">
      <div class="reserva">
        <h2>Faça sua reserva</h2>
        <form @submit.prevent="submitReserva">
          <div id="circle" class="circle"></div>
          <div id="circle" class="secondCircle"></div>
          <div class="form-group">
            <label for="mesa">Escolha a mesa:</label>
            <div class="custom-select textInputWrapper">
              <select class="textInput" v-model="mesa" id="mesa" required>
                <option v-for="mesa in mesas" :value="mesa.numero">{{ mesa.numero }}</option>
              </select>
            </div>
          </div>
          <div class="form-group textInputWrapper">
            <label for="pessoas">Quantidade de pessoas:</label>
            <input class="textInput" type="number" v-model="quantidadePessoas" id="pessoas" required>
          </div>
          <div class="form-group textInputWrapper">
            <label for="horario">Horário:</label>
            <input class="textInput" @mouseover.once=pushHorario() type="time" v-model="horario" id="horario" required>
          </div>
          <div class="form-group textInputWrapper">
            <label for="data">Data:</label>
            <input class="textInput" type="date" v-model="data" id="data" required>
          </div>
          <div class="form-group textInputWrapper">
            <label for="comentario">Comentário ou preferências:</label>
            <textarea class="submit textInput" v-model="comentario" id="comentario"></textarea>
          </div>
          <div class="form-group">
            <button type="submit" @mouseover.once=pushRevisar() :disabled="!isReservaPermitida">Fazer reserva</button>
          </div>
        </form>
      </div>
      <div class="userReservas">
        <h2>Reservas</h2>
        <ul>
          <li v-for="reserva in reservas" :key="reserva.id">
            <p>Usuário: {{ reserva.usuario }}</p>
            <p>Mesa: {{ reserva.mesa }}</p>
            <p>Quantidade de pessoas: {{ reserva.quantidadePessoas }}</p>
            <p>Data: {{ reserva.data }}</p>
            <p>Horário: {{ reserva.horario }}</p>
            <button @click="cancelarReserva(reserva.id)">Cancelar reserva</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue';
import { get_cookie } from '../utils/cookies';
export default {

  components: {
    navbar
  },

  data() {
    return {
      mesas: [
        { numero: 1 },
        { numero: 2 },
        { numero: 3 },
        { numero: 4 },
        { numero: 5 },
        { numero: 6 },
        { numero: 7 },
        { numero: 8 },
        { numero: 9 },
        { numero: 10 },
        { numero: 11 },
        { numero: 12 },
        { numero: 13 },
        { numero: 14 },
        { numero: 15 },
      ],
      mesa: '',
      quantidadePessoas: '',
      data: '',
      horario: '',
      comentario: '',
      message: '',
      reservas: [],
    };
  },

  computed: {
    isReservaPermitida() {
      const hora = this.horario.split(':');
      const horaReserva = parseInt(hora[0]);
      const minutoReserva = parseInt(hora[1]);

      const diaSemana = new Date(this.data).getDay();

      return (
        horaReserva >= 18 &&
        horaReserva <= 24 &&
        (diaSemana !== 0 || minutoReserva !== 0) // Verifica se não é domingo
      );
    },
  },
  methods: {
    submitReserva() {
      const reserva = {
        mesa: this.mesa,
        quantidadePessoas: this.quantidadePessoas,
        data: this.data,
        horario: this.horario,
        comentario: this.comentario,
      };
      const token = get_cookie('token')
      fetch(`${import.meta.env.VITE_API_URL}api/vr/reservas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`

        },
        body: JSON.stringify(reserva),
      })
        .then((response) => {
          if (response.ok) {
            Swal.fire(
              'Feito!',
              'Reserva feita com sucesso',
              'success'
            )
          } else if (this.horario == horario) {
            Swal.fire(
              'Erro!',
              'Já existe reserva nesse horário',
              'error'
            )
          }
        });
      this.getReservas(c)
      this.mesa = ''
      this.quantidadePessoas = ''
      this.data = ''
      this.horario = ''
      this.comentario = ''
    },

    pushHorario() {
      Swal.fire(
        'Cuidado!',
        'Tenha em mente que se a reserva for feita antes das 17:59 ou depois das 23:59 a mesma não será feita',
        'info'
      )
    },


    pushRevisar() {
      Swal.fire(
        'Cuidado!',
        'Revise as informações antes de fazer a reserva',
        'info'
      )
    },

    getReservas() {
      const token = get_cookie('token')
      fetch(`${import.meta.env.VITE_API_URL}api/vr/reservas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`

        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.reservas = data;
        })
        .catch((error) => {
          console.error('Erro ao obter as reservas:', error);
        });
    },

    cancelarReserva(reservaId) {
      fetch(`${import.meta.env.VITE_API_URL}api/reservas/${reservaId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            this.message = 'Reserva cancelada com sucesso';
            this.getReservas();
          } else {
            this.message = 'Erro ao cancelar a reserva';
          }
        })
        .catch((error) => {
          console.error('Erro ao cancelar a reserva:', error);
        });
    }
  },
  mounted() {
    this.getReservas()
  }


};
</script>


<style scoped>
/* Home */

.bodyReserva {
  background-color: #EEEAC4;
  position: absolute;
  height: 100vh;
  width: 100%;
}

.reservaContainer {
  margin-top: 20px;
}

.reserva {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #FBC402;
  border-radius: 20px;
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FF7A00;
  clip-path: circle(300px at right 400px);
}

.secondCircle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FF7A00;
  clip-path: circle(300px at left 500px);
}

.reserva h2 {
  color: black;
}

.userReservas {
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group .submit {
  width: 100%;
}


label {
  display: block;
  margin-bottom: 5px;
  color: black;
  font-weight: bold;
}

.textInputWrapper {
  position: relative;
  width: 100%;
  margin: 12px 5px;
  --accent-color: #ff0000;
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper:before,
.textInputWrapper:after {
  content: "";
  left: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  bottom: -1px;
  z-index: 4;
  width: 100%;
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:focus-within:after {
  border-bottom: 2px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:after {
  content: "";
  transform: scaleX(0);
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  will-change: transform;
  border-bottom: 2px solid var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.textInputWrapper .textInput {
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  background-color: rgb(255, 255, 255);
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #000000;
  font-weight: bold;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  border-top: none;
  border-left: none;
  border-bottom: none;
  border-right: none;
}

.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  outline: none;
}

.textInputWrapper:focus-within .textInput,
.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  background-color: #ffffff;
}

.textInputWrapper:focus-within .textInput::placeholder {
  opacity: 0;
}


button[type="submit"] {
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  transition: 0.5s;
  background-color: #ffffff;
  color: #ff0000;
}

@media only screen and (max-width: 500px) {

  .reserva {
    width: 80%;
  }

  .circle {
    display: none;
  }

  .secondCircle {
    display: none;
  }
}
</style>