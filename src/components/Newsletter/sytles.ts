import styled from 'styled-components'

export const Nwrapper = styled.div`
    background-color: #F2F2F2;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`
export const NinputWrapper = styled.div`
    display: flex;
    width: 100;
    margin-bottom: 25px;
    align-items: center;
    justify-content:center;
    flex-direction: row;
    @media screen and (max-width: 797px){
        flex-direction:column;
    }
`
export const NTitle = styled.p`
    color: #333333;
    margin: 24px 0 16px 0;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    text-align: center;
`
export const NInput = styled.input`
    width:100%;
    max-width: 280px;
    height: 48px;
    border-radius: 5px;
    margin: 5px;
    border: none;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #585858;
        font-size: 12px;
        padding-left: 16px;
    }
    
`
export const Nbutton = styled.button `
    background-color:#000000;
    color: white;
    width: 100%;
    flex-direction: row;
    max-width: 140px;
    height: 48px;
    border: none;
    font-size: 12px;
    font-weight: 700;
    border-radius: 5px;
    @media screen and (max-width: 798px){
        max-width: 280px;
        margin-top: 5px;
    }
`
