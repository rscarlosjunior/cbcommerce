import styled from 'styled-components'

export const Template = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  minheight: auto;
  flex-direction: column;
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  minheight: auto;
  align-items: center;
`

export const ProductBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (max-width: 797px) {
    justify-content: center;
    flex-direction: column;
  }
`
export const BannerImage = styled.img`
  width: 100%;
  cursor: pointer;
`
