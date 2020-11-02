//informar request response do express
import {Request, Response} from 'express'; 
import knex from '../database/connection';

class PointsController {
    /*async index(request: Request, response: Response){
        //lidar com filtros sempre pegar query
        const {city, uf, items} = request.query;

        //convertendo em uma array numerica
        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            // procurando todos que tem relação com 'point_items.point_id'
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            /* procurar todos os pontos que tem pelo menos um item_id que 
            * esta dentro do que esta recebendo dentro do filtro
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            // distinct so vai retornar os pontos de coletas realmente distintos
            .distinct()
            // buscar apenas todos os dados da tabela points
            .select('points.*');

        //console.log(city, uf, items);

        return response.json(points);
    }*/

    /* async show(request: Request, response: Response){
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if (!point){
            return response.status(400).json({ message: 'Point not found.'});
        }

        /*
        SELECT * FROM items
            JOIN point_items ON item.id = point_items.item_id
            WHERE point_items.point_id = {id}
        
       
        return response.json({point});
    }
    */

    //rota de criação do ponto de coleta
    async create (request: Request, response: Response) {
        //traduzindo const para uma função so 
        const {
            name,
            email,
            whatsapp,
        //request.body para criação e edição
        } = request.body;
    
        // se a linha 59 falha a linha 38 n executara (para casos de id inexistentes)
        const trx = await knex.transaction();

        //objeto com todos os dados do point
        const point = {
            name,
            email,
            whatsapp
        }
    
        //listando os points
        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
    
        //((item_id: number)) se faz quando relcama q variavel n tem tipo definido

        // faz os inserts 
        await trx.commit();
    
        //retornado em outro objeto
        return response.json({ 
            id: point_id,
            ... point, 
        });
    }
}

export default PointsController;