import { validateCharacter } from "../src/funcs/validateCharacter"

describe("Teste validateCharacter", () => {
    test("Teste1: Nome vazio", () => {
        const input = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        })
        expect(input).toBe(false);
    })

    test("Teste2: vida = 0", () => {
        const input = validateCharacter({
          name: "Scorpion",
          life: 0,
          strength: 300,
          defense: 500,
        });
    
        expect(input).toBe(false);
    });

    test("Teste3: força = 0", () => {
        const input = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 0,
          defense: 500,
        });
    
        expect(input).toBe(false);
    });

    test("Teste4: força = 0", () => {
        const input = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 300,
          defense: 0,
        });
    
        expect(input).toBe(false);
    });

    test("Teste5: força negativa", () => {
        const input = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: -300,
          defense: 500,
        });
    
        expect(input).toBe(false);
    });

    test("Teste6: Todas informações validas", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(true);
      });
})