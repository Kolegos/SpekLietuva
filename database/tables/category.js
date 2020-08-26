const connection = require("..");
connection.query(
  `CREATE TABLE IF NOT EXISTS spek_lietuva.category (
      category_id int(11) NOT NULL AUTO_INCREMENT, 
      name varchar(255) NOT NULL, 
      photo varchar(255) DEFAULT NULL, 
      PRIMARY KEY (category_id), 
      UNIQUE KEY category_id_UNIQUE (category_id) 
    ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8; 
    `,
  (err) => {
    if (err) throw err;
  }
);
