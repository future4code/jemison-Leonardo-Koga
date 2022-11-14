# Exercício 1
- a) VARCHAR(n) - String com no máximo N caracteres, DATE - representa data (YYYY-MM-DD);

- b) SHOW TABLES mostra todas as tabelas da base de dados e SHOW DATABASES mostra todas as bases de dados.

- c) Mostra a descrição com todas informações do tipo de variáveis de cada coluna, se pode ser nula, qual é primária.

# Exercício 2
- a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "feminine"
);

- b) Error Code: 1062. Entrada duplicada "002" para chave primária
Não aceita criar um elemento na tabela que tenha uma mesma ID

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Fernanda Montenegro",
  1500000,
  "1929-10-16", 
  "femi"
);

- c) Error Code: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1.
Faltou passar "birth_date" e "gender""

- d) Error Code: 1364. O campo 'nome' não tem um valor padrão.
O campo nome não pode ser nulo, é preciso passar um valor

- e) Error Code: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
O valor de data foi passado incorreto, precisa ser passo entre aspas, como uma string.

- f) INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",    "Juliana Paes",   719333.33,   "1979-03-26",    "female" )	1 row(s) affected

# Exercício 3
- a) SELECT * from Actor WHERE gender = "female";

- b) SELECT salary from Actor WHERE name = "Tony Ramos";

- c) Não retornou, pois nenhum ator do banco de dados possui o genero com o valor "invalid";
SELECT * from Actor WHERE gender = "invalid";

- d) SELECT id, name, salary from Actor WHERE salary <= 500000;

- e) Error Code: 1054. Coluna desconhecida 'nome' na 'lista de campos'
O erro ocorre pq o nome correto é name. 
O query correto seria:
SELECT id, name from Actor WHERE id = "002";

# Exercício 4
- a) A query busca atores que tenha nomes começando com "A" ou "J"e que tenham salário maior que R$300.00

- b) SELECT * FROM Actor
WHERE name LIKE "J%" AND salary > 350000;

- c) SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

- d) SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

# Exercicio 5
- a) CREATE TABLE Movie ( 
id VARCHAR(255) PRIMARY KEY, 
title VARCHAR(255) NOT NULL UNIQUE, 
synop TEXT NOT NULL, 
releaseDate DATE NOT NULL, 
rating INT NOT NULL 
);

Cria uma tabela de filmes que contem: id tipo texto com no maximo 255 caracteres e chave primária Titulo tipo texto com no maximo 255 caracteres, não pode ser nulo e unica. Sinopse tipo texto que não pdoer nula. Data de lançamento tipo data(XXXX/XX/XX) e não poder nulo. Avaliação tipo inteiro (0 a 10) e nao pode ser nulo

- b) INSERT INTO Movie (id, title, synop, releaseDate, rating) 
VALUES (
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);

- c) INSERT INTO Movie (id, title, synop, releaseDate, rating) 
VALUES (
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
);

- d) INSERT INTO Movie (id, title, synop, releaseDate, rating) 
VALUES (
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

- e) INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

# Exercício 6
- a) SELECT id, title, rating from Movie WHERE id = "002";

- b) SELECT * from Movie WHERE title = "Deus é Brasileiro";

- c) SELECT id, title, synop from Movie WHERE rating >= 7;

# Exercício 7
- a) SELECT * FROM Movie WHERE title LIKE "%mãe%";

- b) Termo de busca = marido

SELECT * FROM Movie WHERE title LIKE "%marido%" OR synop LIKE "%marido%";

- c) SELECT * FROM Movie WHERE releaseDate < "2020-05-04";

- d) SELECT * FROM Movie
WHERE releaseDate < "2020-05-04" AND 
      (title LIKE "%Deus é Braileiro%" OR
      synop LIKE "%Deus%") AND rating > 7;