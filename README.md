# 🤖 Robux Converter 2

Uma extensão simples para Google Chrome que converte valores de Robux (moeda do jogo Roblox) para moedas do mundo real, facilitando a visualização de custos.

*(Adicione aqui uma breve descrição melhor, se quiser, ou um screenshot da extensão funcionando)*

## ✨ Funcionalidades Principais

* Converte automaticamente os preços em Robux para a moeda local (ex: BRL, USD) diretamente na página da loja do Roblox.
* Mostra a taxa de conversão atualizada (futuramente).
* (Adicione outras funcionalidades que você planeja ou já implementou)

## 🚀 Como Instalar e Usar (Versão de Teste)

Como esta extensão ainda não está na Chrome Web Store, você precisa instalá-la manualmente no seu navegador:

1.  **Baixe o Repositório:**
    * Clone este repositório: `git clone https://github.com/AlyssonKennedy744/robux-converter-2.git`
    * Ou clique em "Code" > "Download ZIP" e extraia os arquivos.

2.  **Gere a Build:**
    * Abra o terminal na pasta do projeto e instale as dependências:
        ```bash
        npm install
        ```
    * Rode o script de build para gerar os arquivos da extensão:
        ```bash
        npm run build
        ```
    * Isso criará uma pasta chamada `dist` no seu projeto.

3.  **Instale no Chrome:**
    * Abra o Google Chrome e vá para a página de extensões: `chrome://extensions`
    * Ative o **"Modo do desenvolvedor"** (Developer mode) no canto superior direito.
    * Clique no botão **"Carregar sem compactação"** (Load unpacked).
    * Selecione a pasta `dist` que foi criada no passo 2.

4.  **Pronto!** A extensão deve aparecer na sua barra de ferramentas e começar a funcionar quando você visitar o site do Roblox.

## 🔧 Para Desenvolvedores (Como Contribuir)

Se você quiser ajudar no desenvolvimento, rodar os testes ou modificar o código:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/AlyssonKennedy744/robux-converter-2.git](https://github.com/AlyssonKennedy744/robux-converter-2.git)
    cd robux-converter-2
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Instale os navegadores do Playwright:**
    ```bash
    npx playwright install
    ```

4.  **Para rodar os testes (End-to-End):**
    ```bash
    npm run test
    ```

5.  **Para gerar a build de produção:**
    ```bash
    npm run build
    ```

## 🛠️ Tecnologias Utilizadas

* **Playwright:** Para testes End-to-End (E2E) da extensão.
* **Node.js:** Para os scripts de build e testes.
* *(Adicione aqui outras bibliotecas que você usou, como React, Vue, Svelte, etc.)*