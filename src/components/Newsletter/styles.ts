import styled from 'styled-components'

export const Nwrapper = styled.div`
  background-color: #f2f2f2;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
export const NinputWrapper = styled.form`
  display: flex;
  width: 100;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 797px) {
    flex-direction: column;
  }
`
export const NvalidationField = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  width: 100%;
  max-width: 280px;
  justify-content: center;
  flex-direction: column;
`
export const NTitle = styled.p`
  color: #333333;
  margin: 24px 0 16px 0;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  text-align: center;
`

export const NTitleDescription = styled.p`
  font-size: 16px;
  text-align: center;
  color: #7a7a7a;
`
export const NInput = styled.input`
  height: 48px;
  width: 100%;
  max-width: 280px;
  border-radius: 5px;
  margin: 5px;
  border: none;
  padding: 16px;
  color: #585858;
  font-size: 12px;
`
export const NInputErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`

export const Nbutton = styled.div`
  margin: 5px;
  width: 100%;
  max-width: 140px;
  @media screen and (max-width: 798px) {
    max-width: 280px;
    margin-top: 5px;
  }
`
export const NbuttonSuccess = styled.div`
  margin: 5px;
  width: 100%;
  max-width: 280px;
`
