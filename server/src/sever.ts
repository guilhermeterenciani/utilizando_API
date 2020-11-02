import express from 'express'; 
//import cors from 'cors';
import path from 'path';
import routes from './routes';

import cors from 'cors';



const app = express();
app.use(cors());
// Solução encontrada em: 
// https://www.treinaweb.com.br/blog/o-que-e-cors-e-como-resolver-os-principais-erros/

//app.use(cors());
app.use(express.json());
app.use(routes);

//pegar arquivos estaticos de uma pasta especifica
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);