// Exercício 3

//a)

const posts: Postagens[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  type Postagens = {
    autor: string,
    texto: string
  }
  

  //b)

  function buscarPostsPorAutor(posts: Postagens[], autorInformado: string): Postagens[]{
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  // As entradas desta função são: posts e autorInformado
  // A saída desta função é: buscarPostsPorAutor
