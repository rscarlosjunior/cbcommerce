import React from 'react'
import {
  Fwrapper,
  Line,
  Ftitle,
  Faddress,
  Wrapper,
  Fbackground,
  Fbutton,
  FbuttonIcon,
  FbuttonWrapper,
  Fimagewrapper
} from './styles'
import EmailIcon from '@mui/icons-material/Email'
import HeadphonesIcon from '@mui/icons-material/Headphones'

export const Footer = () => {
  return (
    <Fbackground>
      <Fwrapper>
        <Wrapper>
          <Ftitle>Localização</Ftitle>
          <Line />
          <Faddress>Avenida Andrômeda, 2000. Bloco 6 e 8</Faddress>
          <Faddress>Alphavile SP</Faddress>
          <Faddress>brasil@corebiz.ag</Faddress>
          <Faddress>+55 11 3090 1039</Faddress>
        </Wrapper>

        <FbuttonWrapper>
          <Fbutton>
            <FbuttonIcon>
              {' '}
              <EmailIcon />{' '}
            </FbuttonIcon>
            Entre em Contato
          </Fbutton>
          <Fbutton>
            <FbuttonIcon>
              <HeadphonesIcon />{' '}
            </FbuttonIcon>{' '}
            Fale com o nosso consultor online
          </Fbutton>
        </FbuttonWrapper>
        <Fimagewrapper>
          <img
            height="45"
            alt="logo"
            width="200"
            src="https://i.imgur.com/11lCxTX.png"
          />
        </Fimagewrapper>
      </Fwrapper>
    </Fbackground>
  )
}
