const assert = require("assert");
const { type } = require("os");
const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const product = productDetails("Alcool gel", "Máscara");
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof product, "object");
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(product.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof product[0], "object");
    assert.strictEqual(typeof product[1], "object");
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(product[0], product[1]);
    // Teste que os dois productIds terminam com 123.
    /** source:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith */
    assert.strictEqual(
      product[0].details.productId.endsWith("123") &&
        product[1].details.productId.endsWith("123"),
      true
    );
  });
});
