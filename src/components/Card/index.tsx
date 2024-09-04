import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import ImagenCard from '../../assents/Rectangle 6.png'
import {
    CardCOntainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture
} from './styles';

const Card = () => {
  return (
    <CardCOntainer>
        <ImageBackground src={ImagenCard} />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/99521360?s=48&v=4' />
                <div>
                    <h4>Antonio Junior</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardCOntainer>
  )
}

export { Card }
