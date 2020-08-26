const connection = require("..");
connection.query(
  `CREATE TABLE IF NOT EXISTS spek_lietuva.game_attempt (
    game_attempt_id INT(11) NOT NULL AUTO_INCREMENT,
    score FLOAT NOT NULL DEFAULT 0,
    user_id VARCHAR(45) NOT NULL,
    fk_category_id INT(11) NOT NULL,
    PRIMARY KEY (game_attempt_id),
    CONSTRAINT fk_category_id_ga
      FOREIGN KEY (fk_category_id)
      REFERENCES spek_lietuva.category (category_id)
      ON DELETE CASCADE
      ON UPDATE NO ACTION);
  `,
  (err) => {
    if (err) throw err;
  }
);
