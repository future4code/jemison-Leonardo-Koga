**Exercício 1**

**a)** <p>O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?<p>
<p>O cost é o custo numérico e esta relacionado a segurança, quanto maior, mais seguro. O salt é a adição de um conteúdo aleatório junto a senha antes de gerar o hash. O valor recomendado do round é 12. Usei o 12, por ser o mais usado e para não deixar lento o processo.<p>

**Exercício 2**

**a)** <p>Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.<p>
<p>Devemos modificar primeiro o cadastro, pois temos que antes de cadastrar o usuário criptografar a senha, para não ficar a senha no banco<p>

**d)** <p>No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.<p>
<p>Não, porque ele usa o token para o GET<p>