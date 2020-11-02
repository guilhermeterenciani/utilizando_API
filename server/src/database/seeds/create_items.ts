import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        { title: "Lâmpadas", image: 'lampadas.png'},
        { title: "Pilhas e Baterias", image: 'baterias.svg'},
        { title: "Papéis e Papelao", image: 'papeis-papelao.svg'},
        { title: "Residuos Eletrônicos", image: 'eletronicos.svg'},
        { title: "Residuos Orgânico", image: 'organicos.svg'},
        { title: "Óleo de Cozinha", image: 'oleo.svg'},
    ])
}