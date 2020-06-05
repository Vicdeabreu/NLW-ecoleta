const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
//   // Cria uma tabela
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   // Inserir dados na tabela
  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  // `
  //     const values = [
  //       "https://images.unsplash.com/photo-1591164413537-29a28c5fdc62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Papersider",
  //       "Papersider",
  //       "Guilherme Gemballa, Jardim América",
  //       "Numero 260",
  //       "Santa Catarina",
  //       "Río Grande do Sul",
  //       "Resíduos Eletrónicos, Lámpadas"
  //     ]

      // function afterInsertData(err) {
      //   if(err) {
      //     return console.log(err)
      //   }
      //   console.log("Cadastrado com sucesso")
      //   console.log(this)
      // }

//       // db.run(query, values, afterInsertData)

//   // Consultar os dados da tabela

    // db.all(`SELECT * FROM places`, function(err, rows){
    //   if(err){
    //     return console.log(err)
    //   }
    //   console.log("Aqui estão seus registros")
    //   console.log(rows)
    // })

  // Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id= ?`, [4], function(err){
    //   if(err) {
    //     return console.log(err)
    //   }

    //   console.log("Registro deletado com sucesso!")
    // })
    
// })