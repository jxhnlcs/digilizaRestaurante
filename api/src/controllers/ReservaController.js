import { ReservaDao } from "../db/ReservaDao.js";
import { UserDao } from "../db/UserDao.js";
import { now_increase_interval } from "../utils/date.js";
import { encode_jwt } from "../utils/jwt.js";

class ReservaController {

    async InserirReserva(request, response) {
        {
            const { mesa, quantidadePessoas, data, horario, comentario } = request.body;
            const existeReserva = await verificarReservaExistente(mesa, data, horario);
            const reservaDao = new ReservaDao
            const reserva = await reservaDao.CadastrarReserva(
                mesa, quantidadePessoas, data, horario, comentario
            )

            if (existeReserva) {
                return response.json({ message: 'Já existe uma reserva para esta mesa na mesma data e horário.' });
            }
            else if (reserva) {
                return response.json({ message: 'Reserva realizado com sucesso.' })
            }
            return response.json({
                message: "Erro para realizar o reserva",
                "erro": register
            })
        };
    }

    async GetReservas(request, response) {
        {
            const reservaDao = new ReservaDao
            const reserva = await reservaDao.GetReservas()
            if (!reserva) {
                return response.json({
                    message: "Erro para buscar reservas",
                    "erro": reserva
                })
            }
            return response.json({
                reservas: reserva
            })
        };
    }

    

}

export { ReservaController }