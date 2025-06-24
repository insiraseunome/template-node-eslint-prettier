
# 🧰 Template Node.js com ESLint e Prettier

Este repositório oferece uma estrutura de base para projetos Node.js com as ferramentas **ESLint** e **Prettier** configuradas desde o início. O objetivo é garantir um código padronizado, organizado e com boa legibilidade desde as primeiras linhas do projeto.

> Prettier: ferramenta de formatação automática que organiza o código de forma consistente, corrigindo espaçamento, aspas, quebras de linha e outros estilos visuais. 
> ESLint: analisador estático que identifica erros e ajuda a manter boas práticas de codificação JavaScript durante o desenvolvimento.

---

## ✅ O que está configurado

### Prettier (formatação automática de código)

Prettier é responsável por aplicar regras de estilo no código. Isso inclui:
- Uso de **aspas simples** para strings
- **Remoção de ponto e vírgula** ao final de linhas
- **Quebras de linha no padrão LF** (mais compatível entre sistemas)
- Inclusão de **vírgulas finais** em arrays e objetos sempre que possível (`trailingComma`)

Essas definições estão no arquivo `prettier.config.js`, que pode ser modificado conforme sua preferência.

---

### ESLint (análise de qualidade do código)

O ESLint ajuda a manter boas práticas no código, como evitar variáveis não utilizadas ou nomes inconsistentes. Neste template, ele está configurado com:
- A base de regras recomendadas do JavaScript (`@eslint/js`)
- Integração com o Prettier (para evitar conflitos entre análise e formatação)
- Exigência de **camelCase** em variáveis e propriedades

As regras estão descritas no arquivo `eslint.config.mjs`, que também pode ser personalizado conforme necessário.

---

## 📜 Scripts disponíveis

No arquivo `package.json`, foram adicionados os seguintes scripts para facilitar a execução das ferramentas:

`npm run lint        # Verifica problemas no código com o ESLint
npm run lint:fix     # Corrige automaticamente problemas detectados pelo ESLint
npm run format       # Formata todos os arquivos com o Prettier
npm run format:check # Verifica se os arquivos estão devidamente formatados`

> O comando npm run format é especialmente útil para corrigir problemas invisíveis, como diferenças de quebra de linha entre sistemas operacionais.

⚠️ Importante para projetos já iniciados
Se você está aplicando este template em um projeto que já possui um package.json, siga os passos abaixo para evitar conflitos:

Copie apenas os arquivos de configuração, como:

eslint.config.mjs
prettier.config.js
.prettierignore

Adicione manualmente os scripts acima na seção "scripts" do seu package.json.
Instale as dependências necessárias com:

npm install --save-dev eslint @eslint/js eslint-plugin-prettier eslint-config-prettier prettier globals

Essas dependências são essenciais para que os comandos funcionem corretamente.

📁 Estrutura sugerida do projeto

meu-projeto/
 ┣ 📄 eslint.config.mjs
 ┣ 📄 prettier.config.js
 ┣ 📄 .prettierignore
 ┣ 📄 package.json
 ┗ 📁 src/

A pasta src/ é onde você pode organizar os arquivos da sua aplicação. Você pode alterar essa estrutura conforme o seu fluxo de trabalho.

🧩 Integração com o Visual Studio Code
Para integração ideal com o VS Code, recomenda-se instalar as seguintes extensões:

ESLint
Prettier – Code formatter

Com essas extensões ativas, o VS Code aplica automaticamente as correções e formatações ao salvar os arquivos, conforme as configurações definidas neste template.

📚 Documentações oficiais
Caso deseje ajustar as regras de lint ou formatação, confira as documentações oficiais:

ESLint: https://eslint.org/docs/latest

Prettier: https://prettier.io/docs/en/

✅ Como usar este template
Faça uma cópia do repositório em uma nova pasta:

Manualmente via Explorador de Arquivos, ou com o comando:

cp -r template-node-eslint-prettier novo-projeto
cd novo-projeto
npm install

Comece a escrever seu código. Os comandos de lint e formatação já estarão prontos para uso.

Este template foi criado para simplificar a configuração inicial de novos projetos Node.js, permitindo que você se concentre no desenvolvimento e não na configuração de ferramentas.

---

🧠 Este template foi desenvolvido majoritariamente em conjunto com o **Copilot**, da Microsoft.  
Se você encontrar algo que possa ser melhorado ou quiser contribuir com sugestões, fique à vontade para abrir uma *issue* ou enviar um *pull request*.
Toda contribuição é bem-vinda!
