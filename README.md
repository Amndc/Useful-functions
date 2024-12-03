# useful-functions
Este repositório contém um compilado de funções utilitárias em JavaScript para facilitar a manipulação do DOM, criação de elementos, estilização dinâmica e outras operações comuns no desenvolvimento web.

## Funções

### 1. **Funções de Geração de Cores**
- **Descrição**: Função para gerar cores em diferentes aleatorias em hex, armazena no localstorage e permite buscar por um identificador. 
- **Exemplo de uso**:
  ```javascript
  const randomColor = generateColor();
  document.body.style.backgroundColor = randomColor;
### 2. **Funções de Geração de Cores Monocromaticas"" 
-**Descrição**: Função para gerar cores a partir de uma cor inicial. 
- **Exemplo de uso**:
    ```javascript
    var coresArray = [];
    for (var i = 0; i < 10; i++) {
                var CorNova = CriaCoresMonocromaticoRGB(randomColor);
                coresArray.push(CorNova);
    }
