import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
    });
    // CRIAR A TABELA
}

export async function down(knex: Knex){
    // VOLTAR ATRAS (DELETAR TABELA)
    return knex.schema.dropTable('point');
}