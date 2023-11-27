import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import LogoCasaquinho from "../Assets/logocasaquinho.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const MenuEsquerda = styled.div`
  background-color: #ffffff;
  width: 35%;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 80%;
  padding-top: 5%;
`;

const AreaLateral = styled.div`
  background-color: #efefef;
  width: 65%;
`;

const ConteinerTopo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Input = styled.input`
  position: relative;
  padding: 10px;
  margin-top: 10px;
  width: 70%;
  background-color: #edeef1;
  border-radius: 13px;
  border: initial;
  box-shadow: 1px 8px 20px 1px rgb(0 0 0 / 10%);
  height: 40px;
  padding-left: 35px;
  box-sizing: border-box;
  &::placeholder {
    padding-left: 20px;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 145px;
  left: 85px;
  transform: translateY(-50%);
  color: #999; 
  cursor: pointer;
`;

const Temperatura = styled.h2`
  color: #ec6e4c;
  font-size: 80px;
  text-align: center;
  margin-top: 50px;
  font-weight: 300;
  line-height: 48px;
`;
const ConteinerMeio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

const Sub = styled.h3`
  font-weight: 400;
  font-size: 17px;
`;

const Divisor = styled.div`
  width: 65%;
  height: 2px;
  background-color: #ededed;
  margin-top: -8px;
`;

const Paragrafo = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15x;
  letter-spacing: 0em;
  text-align: left;
`;

const ConteinerParagrafo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 44px;
  gap: 4px;
`;

// const SwitchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 10px;
// `;

// const SwitchLabel = styled.label`
//   margin-right: 10px;
// `;

// const SwitchInput = styled.input`
//   opacity: 0;
//   width: 0;
//   height: 0;

//   &:checked + span {
//     background-color: #EC6E4C; 
//   }

//   &:checked + span:before {
//     transform: translateX(26px);
//   }
// `;

// const SwitchSlider = styled.span`
//   position: relative;
//   cursor: pointer;
//   width: 50px;
//   height: 26px;
//   background-color: #999; 
//   border-radius: 34px;
//   display: inline-block;

//   &:before {
//     content: "";
//     position: absolute;
//     height: 22px;
//     width: 22px;
//     left: 2px;
//     top: 2px;
//     background-color: white;
//     border-radius: 50%;
//     transition: 0.4s;
//   }
// `;

const Dias = styled.h4`
font-size: 40px;
font-weight: 400;
line-height: 48px;
letter-spacing: 0em;
text-align: left;
font-family: 'Poppins', sans-serif;
color: #222222;
align-items: center;
cursor: pointer;

`

const Semanas = styled.h5`
font-family: 'Poppins', sans-serif;
font-size: 40px;
font-weight: 400;
line-height: 48px;
letter-spacing: 0em;
text-align: left;
color: #C8C8C8;
align-items: center;
cursor: pointer;

`
const ConteinerInfoDias = styled.div`
display: flex;
flex-direction: row;
gap: 25px;
margin-left: 37px;
margin-top: 15px;
align-items: center;
`
const Titulo = styled.h1`
font-family: 'Poppins', sans-serif;
font-size: 76px;
font-weight: 400;
line-height: 48px;
text-align: left;
align-items: center;


`

const SubTitulo = styled.p`
font-family: 'Poppins', sans-serif;
font-size: 15px;
font-weight: 400;
line-height: 48px;
text-align: left;
align-items: center;

`

const ConteinerCidades = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-left: 25px;
margin-top: 35px;
`
const ConteinerMinima = styled.div`
width: 300px;
height: 145px;
border-radius: 32px;
background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
box-shadow: 0px 24px 48px 0px #314F7C14;
`
const InfosTop = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
gap:80px;
margin-top: 10px;
  
`
const Minima = styled.p`
font-family: 'Poppins', sans-serif;
font-size: 17px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
text-align: justify;
margin-top: 35px;
margin-left: 15px;

`

const Maxima = styled.p`
  font-family: 'Poppins', sans-serif;
font-size: 17px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
text-align: justify;
margin-top: 35px;
margin-left: 15px;

`
const InfoGrau = styled.h4`
font-family: 'Poppins', sans-serif;
font-size: 32px;
font-weight: 600;
line-height: 36px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
text-align: justify;
margin-top: 5px;
margin-left: 15px;
`

const InfosBottom = styled.div`
  display: flex;
justify-content: center;
flex-direction: row;
gap:80px;
margin-top: 10px;
`
const Vel = styled.div`
  width: 300px;
height: 145px;
border-radius: 32px;
background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
box-shadow: 0px 24px 48px 0px #314F7C14;
`
const Umidade = styled.div`
width: 300px;
height: 145px;
border-radius: 32px;
background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
box-shadow: 0px 24px 48px 0px #314F7C14;
`
const InfosVel = styled.p`
  font-family: 'Poppins', sans-serif;
font-size: 17px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
text-align: justify;
margin-top: 35px;
margin-left: 15px;
`
const InfosUmidade = styled.p`
  font-family: 'Poppins', sans-serif;
font-size: 17px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
text-align: justify;
margin-top: 35px;
margin-left: 15px;
`

const InfosVelUmidade = styled.h4`
  font-family: 'Poppins', sans-serif;
font-size: 32px;
font-weight: 600;
line-height: 36px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
text-align: justify;
margin-top: 5px;
margin-left: 15px;
`


export default function Home() {
  const [cidade, setCidade] = useState('');
  const [climaAtual, setClimaAtual] = useState(null);
  const [previsaoProximosDias, setPrevisaoProximosDias] = useState([]);
  const [buscandoClima, setBuscandoClima] = useState(false);
  const [exibirGrafico, setExibirGrafico] = useState(false);

  const buscarClima = async () => {
    try {
      setBuscandoClima(true);

      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=8b196609e696469d9f311f5830006ad4`
      );

      setClimaAtual(resposta.data);

      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&units=metric&appid=8b196609e696469d9f311f5830006ad4`
      );

      setPrevisaoProximosDias(respostaPrevisao.data.list);
    } catch (erro) {
      console.error('Erro ao buscar dados do clima:', erro);
    } finally {
      setBuscandoClima(false);
    }
  };

  useEffect(() => {
    if (cidade) {
      buscarClima();
    }
  }, [cidade]);

  const handleMostrarGrafico = () => {
    setExibirGrafico(true);
  };

  const dataAtual = new Date();
  const diaSemana = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(dataAtual);
  const horario = dataAtual.toLocaleTimeString('pt-BR');

  return (
    <Container>
      <GlobalStyle />
      <MenuEsquerda>
        <ConteinerTopo>
          <Logo src={LogoCasaquinho} alt="logo casaquinho" />
          <Input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Procure por uma cidade"
          />
          
            <SearchIcon icon={faSearch} onClick={buscarClima} />
        
        </ConteinerTopo>
        <ConteinerMeio>
         
              <Temperatura>{climaAtual?.main?.temp}°C</Temperatura>
              <Sub>{climaAtual?.weather[0]?.description}</Sub>
          <Divisor />
        </ConteinerMeio>
        <ConteinerParagrafo>
          <Paragrafo>{diaSemana}, {horario}</Paragrafo>
          <Paragrafo>{dataAtual.toLocaleDateString('pt-BR')}</Paragrafo>
        </ConteinerParagrafo>
      </MenuEsquerda>
      <AreaLateral>
      <ConteinerInfoDias>
          <Dias>Hoje</Dias>
          <Semanas onClick={handleMostrarGrafico}>Próximos dias</Semanas>
        </ConteinerInfoDias>
        <ConteinerCidades>
          <Titulo>{cidade}</Titulo>
          <SubTitulo>Lat: {climaAtual?.coord?.lat} Long: {climaAtual?.coord?.lon}</SubTitulo>
        </ConteinerCidades>
        {exibirGrafico ? (
          <ConteinerMeio>
            <LineChart width={400} height={300} data={previsaoProximosDias}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dt_txt" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
            </LineChart>
          </ConteinerMeio>
        ) : (
          <>
            <InfosTop>
              <ConteinerMinima>
                <Minima>Mínima</Minima>
                <InfoGrau>{climaAtual?.main?.temp_min}° C</InfoGrau>
              </ConteinerMinima>
              <ConteinerMinima>
                <Maxima>Máxima</Maxima>
                <InfoGrau>{climaAtual?.main?.temp_max}° C</InfoGrau>
              </ConteinerMinima>
            </InfosTop>
            <InfosBottom>
              <Umidade>
                <InfosUmidade>umidade</InfosUmidade>
                <InfosVelUmidade>{climaAtual?.main?.humidity}%</InfosVelUmidade>
              </Umidade>
              <Vel>
                <InfosVel>Velocidade do vento</InfosVel>
                <InfosVelUmidade>{climaAtual?.wind?.speed} m/s</InfosVelUmidade>
              </Vel>
            </InfosBottom>
          </>
        )}
      </AreaLateral>
    </Container>
  );
}