import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        //padroniza caminho (dirname- caminho para diretorio do arquivo que ta executando)
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};
