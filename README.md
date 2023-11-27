# Leva um Casaquinho - Aplicação de Previsão do Tempo

Uma aplicação web que fornece informações detalhadas sobre o clima de uma cidade específica.

## Funcionalidades

- **Consulta do Clima:** Informações em tempo real sobre a temperatura atual, máxima, mínima e previsão para os próximos dias.
- **Identificação Visual:** Cores e ícones indicativos com base nas condições climáticas.
- **Gráfico de Previsão:** Visualização da previsão do tempo para os próximos dias.
- **Recomendação de Roupa:** Alerta ao usuário para levar um casaquinho se as temperaturas estiverem abaixo de 17°C.

## Tecnologias Utilizadas

- **React:** Desenvolvimento do front-end com a eficiente ferramenta [Vite](https://vitejs.dev/).
- **Styled Components:** Estilização elegante e dinâmica.
- **Recharts:** Construção do gráfico de previsão do tempo.

## Deploy

A aplicação está hospedada no [Link](https://leva-um-casaquinho.vercel.app/).

## Como Iniciar

1. Instale as dependências:

    ```bash
    npm install
    ```

2. Crie uma conta no [OpenWeatherMap](https://openweathermap.org/) e obtenha sua chave de API gratuita.
3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API.
4. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

## API de Clima

Utilizamos a API pública do [OpenWeatherMap](https://openweathermap.org/) para obter os dados meteorológicos. Para utilizar, é necessário criar uma chave de API gratuita, garantindo a segurança dos dados.

## Cores e Ícones

A identificação visual segue a seguinte regra:

- **Clear:** “Céu aberto” (laranja)
- **Clouds:** “Nublado” (cinza)
- **Rain:** “Chovendo” (azul)
- **Snow:** “Nevando” (cinza claro)
- **Thunderstorm:** “Tempestade” (roxo)
- **Drizzle:** “Chuviscando” (azul claro)
- **Mist:** “Neblina” (cinza claro)

## Recomendação

Lembre-se de levar um casaquinho se as temperaturas estiverem abaixo de 17°C.

**Desfrute da sua jornada com "Leva um Casaquinho"!**
