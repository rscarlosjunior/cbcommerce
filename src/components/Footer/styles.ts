import styled from 'styled-components'

export const Fbackground = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
`

export const Fwrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    @media screen and (max-width: 797px){
        flex-direction: column;
        max-width: 280px;
    }
    max-width: 1280px;
    width: 100%;
`   
export const Ftitle = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    margin-top: 20px;
`
export const Faddress = styled.span`
    font-size: 13px;
    font-weight: bold;
    margin: 5px 0 5px 0;
    color: white;
    line-height: #FFFFFF;
`
export const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Line = styled.hr `
    width: 50px;
    height: 5px;
    background-color:white;
    opcaity: 0.5;
    margin: 16px 0 20px 0;

`
export const FbuttonWrapper = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    margin-top: 40px;
    width:100%;
    @media screen and (min-width: 797px){
        flex-direction: row;
    }

`

export const Fimagewrapper = styled.div `
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 20px;
`

export const Fbutton = styled.button `
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    text-transform: uppercase;
    margin-bottom: 24px;
    background-color: white;
    color: black;
    width: 100%;
    max-width: 195px;
    font-weight: bold;
    font-size:12px;
    height: 38px;
    border: none;
    border-radius: 5px;
    position: relative;
`

export const FbuttonIcon= styled.span `
    position: absolute;
    left: 10px;
    top: 9px;
`