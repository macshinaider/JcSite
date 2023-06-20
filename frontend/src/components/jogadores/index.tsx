import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';


interface UserData {
  avatar: string;
  nomejogador: string;
  posicao: string;
  numerocamisa: string;
}

const CardUser = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  console.log(userData);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/showjogadores');
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container>
      {userData ? (
        userData.map((dados) => (
          <div key={dados.id}>
            <img src={dados.avatar} alt={dados.nomejogador} />
            <p>Nome: {dados.nomejogador}</p>
            <p>Posição: {dados.posicao}</p>
            <p>Numero da Camisa: {dados.numerocamisa}</p>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};

export default CardUser;