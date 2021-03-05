import knex from "knex";
import path from "path";

// o path.resolve() padroniza os caminhos
// para cada sistema operacional
// Ex.: se eu colocar dois argumentos,
// 'database', 'index.js', ele juntará os dois
// fazendo assim -> 'database/index.js'.
// se o SO for Linux, ele deixará a barra assim /
// se for windows, ele colocará a barra invertida \

// O __dirname retornará o diretório atual
// Ex.: Este arquivo está localizado em:
// src/database
// e ai, basta eu voltar alguns níveis e acessar
// onde irei salvar meus arquivos
// colocando '..', para cada nível que eu quiser
// voltar

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;
