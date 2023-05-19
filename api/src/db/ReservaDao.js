import { connection } from "./db_connect.js";

class ReservaDao {

    async CadastrarReserva(mesa, quantidadePessoas, data, horario, comentario) {
        {
            const query = 'INSERT INTO reserva (mesa, quantidade_pessoas, data, horario, comentario) VALUES (?, ?, ?, ?, ?)';
            await connection.query(query, [mesa, quantidadePessoas, data, horario, comentario]).catch(err => {
                return err
            })
            return true;
        };
    }

    async GetReservas() {
        {
            const query = 'SELECT * from reserva';
            const data = await connection.query(query, []).catch(err => {
                return err
            })
            return data[0] ?? [];
        };
    }
}

export { ReservaDao }