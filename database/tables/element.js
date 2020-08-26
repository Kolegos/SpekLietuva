const connection = require("..");
connection.query(
  `CREATE TABLE IF NOT EXISTS spek_lietuva.element (
    element_id int(11) NOT NULL AUTO_INCREMENT, 
    name varchar(90) NOT NULL, 
    image_link varchar(100) DEFAULT NULL, 
    latitude decimal(20,8) DEFAULT NULL, 
    longtitude decimal(20,8) DEFAULT NULL, 
    fk_category_id int(11) DEFAULT NULL, 
    PRIMARY KEY (element_id), 
    KEY fk_category_id_idx (fk_category_id), 
    CONSTRAINT fk_category_id FOREIGN KEY (fk_category_id) REFERENCES category (category_id) ON DELETE CASCADE ON UPDATE NO ACTION 
  ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;  
  `,
  (err) => {
    if (err) throw err;
  }
);
