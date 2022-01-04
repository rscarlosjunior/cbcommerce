import styled from 'styled-components'

export const Hcontent = styled.div`
  flex-direction: row;
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 798px) {
    width: 100%;
  }
  max-width: 205px;
`
export const IconSpacing = styled.div`
  margin: 0px 5px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MyAccount = styled.span`
  font-size: 15px;
  color: #7a7a7a;
`

export const Total = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background-color: #F8475F;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`