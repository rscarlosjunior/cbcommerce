import React from 'react'
import { Nbutton, NInput, NinputWrapper, NTitle, Nwrapper } from './sytles'

export const Newsletter = () => {
    return (
        <Nwrapper>
            <NTitle>Participe de nossas news com promoções e novidades!</NTitle>
            <NinputWrapper>
                <NInput 
                    placeholder="Digite seu nome"
                    type="text"
                />
                <NInput 
                    placeholder="Digite seu e-mail"
                    type="email"
                />
                <Nbutton>Eu quero!</Nbutton>
            </NinputWrapper>
        </Nwrapper>
    )
}

