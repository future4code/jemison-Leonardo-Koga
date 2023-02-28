import { performPurchase } from "../src/function/funcUserSaldo"
import { User } from "../src/model/user"

describe('Teste função extrato cliente', () => {
        test("Teste saldo maior que o valor da compra", () => {
            const user1: User = {
                name: "Leonardo",
                balance: 100
            }

            const result = performPurchase(user1, 40)

            expect(result).toEqual({
                name: "Leonardo",
                balance: 60
            })
        })

        test("Teste saldo igual valor da compra", () => {
            const user2: User = {
                name: "Leonardo",
                balance: 100
            }

            const result2 = performPurchase(user2, 100)

            expect(result2).toEqual({
                ...user2,
                balance: 0
            })
        })

        test("Teste saldo menor valor da compra", () => {
            const user3: User = {
                name: "Leonardo",
                balance: 30
            }

            const result3 = performPurchase(user3, 50)

            expect(result3).not.toBeDefined()
        })
    })