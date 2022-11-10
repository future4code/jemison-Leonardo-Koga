# Exercício 1

- a) Deleta coluna de salários;

- b) Muda coluna de genero para sexo e aceita até 6 caracteres;

- c) Mantem a tabela genero como genero e aceita ate 255 carcteres;

- d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercício 2

- a) UPDATE Actor SET name = "Larissa", birth_date = "2015/05/14" WHERE id = "003";

- b) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

- c) UPDATE Actor SET name = "Debora Falabela", birth_date = "1984-07-11", salary = 8000000, gender = "female" WHERE id = "005";

- d) 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0
Retorna como conc;uído mais não altera a tabela;

# Exercíco 3

- a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

- b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

# Exercício 4

- a) SELECT MAX(salary) FROM Actor;

- b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

- c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

- d) SELECT SUM(salary) FROM Actor;

# Exercício 5

- a) retorna de forma separada a quantidade em cada genero

- b) SELECT id, name FROM Actor ORDER BY name DESC;

- c) SELECT * FROM Actor ORDER BY salary ASC;

- d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

- e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

# Exercício 6

- a) ALTER TABLE Movie ADD playing_limit_date VARCHAR(255);

- b) ALTER TABLE Movie CHANGE rating rating FLOAT;

- c) UPDATE Movie SET playing_limit_date = "2022-12-30" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2022-07-10" WHERE id = "003";

- d) DELETE FROM Movie WHERE id = "002";



