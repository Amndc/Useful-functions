# useful-functions
Este repositório contém um compilado de funções utilitárias em JavaScript para facilitar a manipulação do DOM, criação de elementos, estilização dinâmica e outras operações comuns no desenvolvimento web.

## Funções

### 1. **Função de Geração de Cores**
- **Descrição**: Função para gerar cores em hexadecimal passando algum valor, armazena no localstorage e permite buscar por um identificador. 
- **Exemplo de uso**:
  ```javascript
  const randomColor = generateColor();
  document.body.style.backgroundColor = randomColor;
### 2. **Função de Geração de Cores Monocromaticas** 
- **Descrição**: Função para gerar novas cores a partir de uma cor informada, com brilho e intensidades diferente. 
- **Exemplo de uso**:
    ```javascript
    var coresArray = [];
    for (var i = 0; i < 10; i++) {
                var CorNova = CriaCoresMonocromaticoRGB(randomColor);
                coresArray.push(CorNova);
    }
### 3. **Função para Validar Luminosidade de uma cor** 
- **Descrição**:  Calcula o brilho de uma cor, definindo 1 para uma cor com brilho maior que 128 e 0 para uma cor com brulho menor.
- **Exemplo de uso**:
    ```javascript
    const luminosidade = validaLuminosidade(randomColor) 
