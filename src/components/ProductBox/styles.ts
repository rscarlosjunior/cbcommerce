import styled from 'styled-components'

//product wrapper
export const Pwrapper = styled.div`
  max-width: 216px;
  max-height: 353px;
  background-color: white;
`
export const Box = styled.div`
  margin: 5px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
//description wrapper
export const Dwrapper = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`
export const ProductName = styled.span`
  font-size: 12px;
  linge-height: 16.5px;
  color: #7a7a7a;
  text-align: center;
`
export const ProductSalePrice = styled.span`
  text-decoration: line-through;
  color: #7a7a7a;
  font-size: 12px;
`
export const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  linge-height: 24.55px;
  text-align: center;
`
export const ProductParcelPrice = styled.span`
  font-size: 11px;
  linge-height: 15px;
  margin: 5px 0 5px 0;
  color: #7a7a7a;
  text-align: center;
`

export const Bbuton = styled.button`
  background-color: #000000;
  color: white;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 5px;
  max-width: 126px;
`
