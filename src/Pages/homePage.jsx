import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import LogoCasaquinho from "../Assets/logocasaquinho.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { format } from 'date-fns';


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

export default function Home() {
  const [cidade, setCidade] = useState('');
  const [climaAtual, setClimaAtual] = useState(null);
  const [previsaoProximosDias, setPrevisaoProximosDias] = useState([]);
  const [buscandoClima, setBuscandoClima] = useState(false);

  const buscarClima = async () => {
    try {
      setBuscandoClima(true);

      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=8b196609e696469d9f311f5830006ad4`
      );

      // Atualize o estado com os dados da resposta
      setClimaAtual(resposta.data);

      // Agora, obtenha a previsão para os próximos dias
      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&units=metric&appid=8b196609e696469d9f311f5830006ad4`
      );

      // Atualize o estado com os dados da previsão
      setPrevisaoProximosDias(respostaPrevisao.data.list);
    } catch (erro) {
      console.error('Erro ao buscar dados do clima:', erro);
    } finally {
      setBuscandoClima(false);
    }
  };

  useEffect(() => {
    // Verifique se a cidade está vazia antes de iniciar a busca
    if (cidade) {
      buscarClima();
    }
  }, [cidade]);
  return (
    <Container>
      <GlobalStyle />
      <MenuEsquerda>
        <ConteinerTopo>
          <Logo src={LogoCasaquinho} alt="logo casaquinho" />
          <Input   type="text"
  value={cidade}
  onChange={(e) => setCidade(e.target.value)}
  placeholder="Procure por uma cidade"/>
          <SearchIcon icon={faSearch} onClick={buscarClima} />
        </ConteinerTopo>
        <ConteinerMeio>
          <Temperatura>{climaAtual?.main?.temp}°C</Temperatura>
          <Sub>{climaAtual?.weather[0]?.description}</Sub>
          <Divisor />
        </ConteinerMeio>
        <ConteinerParagrafo>
          <Paragrafo>{climaAtual?.dt_txt ? format(new Date(climaAtual?.dt_txt), 'dd/MM/yyyy, HH:mm') : ''}</Paragrafo>
          <Paragrafo>Quinta-feira, 16:32</Paragrafo>
        </ConteinerParagrafo>
    
{/* <SwitchContainer>
  <SwitchLabel htmlFor="lightModeSwitch">Light Mode</SwitchLabel>
  <SwitchInput type="checkbox" id="lightModeSwitch" />
  <SwitchSlider />
</SwitchContainer> */}

      </MenuEsquerda>
      <AreaLateral>
      <ConteinerInfoDias>
      <Dias>Hoje</Dias>
      <Semanas>Proximos dias</Semanas>
      </ConteinerInfoDias>
      <ConteinerCidades>
      <Titulo>{cidade}</Titulo>
      <SubTitulo>Lat:  {climaAtual?.coord?.lat}  Long: {climaAtual?.coord?.lon}</SubTitulo>
      </ConteinerCidades>
      </AreaLateral>
    </Container>
  );
  }