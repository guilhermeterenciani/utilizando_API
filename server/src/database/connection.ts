import knex from 'knex';
import path from 'path';


const connection = knex({
    client: 'sqlite3',
    connection: {
        //padroniza caminho (dirname- caminho para diretorio do arquivo que ta executando)
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
})

export default connection;