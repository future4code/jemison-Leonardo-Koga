# Exercício1

a) Chave estrangeira é a forma que usamos para relacionar uma tabela com outra

b) CREATE TABLE Rating ( id VARCHAR(255) PRIMARY KEY, comment TEXT NOT NULL, rate FLOAT NOT NULL, movie_id VARCHAR(255), FOREIGN KEY (movie_id) REFERENCES Movie(id) );

INSERT INTO Rating (id, comment, rate, movie_id) VALUES( "001", "Clássico", 10, "001" );
INSERT INTO Rating (id, comment, rate, movie_id) VALUES( "002", "Comédia clássica", 10, "002" );
INSERT INTO Rating (id, comment, rate, movie_id) VALUES( "003", "Clássico do cinema brasileiro", 10, "003" );
INSERT INTO Rating (id, comment, rate, movie_id) VALUES( "004, "Comédia brasileira", 10, "004" );

c) 
INSERT INTO Rating (id, comment, rate, movie_id) VALUES( "010", "Clássico", 10, "500" )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4415922-leonardo-koga`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

d) ALTER TABLE Movie DROP COLUMN rating;

e) DELETE FROM Movie WHERE id = "001";

DELETE FROM Movie WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4415922-leonardo-koga`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não pode deletar uma referência de outra tabela

# Exercício2

a) A tabela MovieCast apenas duas colunas ambas com chave estrangeira, cada linha terá a id de um filme e a id de um ator

b) 
INSERT INTO MovieCast (movie_id, actor_id) VALUES( "001", "002" );
INSERT INTO MovieCast (movie_id, actor_id) VALUES( "001", "001" );
INSERT INTO MovieCast (movie_id, actor_id) VALUES( "003", "002" );
INSERT INTO MovieCast (movie_id, actor_id) VALUES( "002", "002" );
INSERT INTO MovieCast (movie_id, actor_id) VALUES( "003", "003" );
INSERT INTO MovieCast (movie_id, actor_id) VALUES( "004", "004" );

c) 
INSERT INTO MovieCast (movie_id, actor_id) VALUES( "001", "100" );

INSERT INTO MovieCast (movie_id, actor_id) VALUES( "001", "100" )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4415922-leonardo-koga`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Informa o erro de chave estrangeira, neste caso o id do ator é inexistente.

d) DELETE FROM Actor WHERE id = "001";

DELETE FROM Actor WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4415922-leonardo-koga`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível deletar uma linha pai, restrição de chave estrangeira

# Exercício3

a) A query seleciona todos dados da tabela filme e rating onde o id de filme for igual ao movie_id de rating. O operador On pode ter o significado de "onde"

b) SELECT title, Movie.id, rate FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;

