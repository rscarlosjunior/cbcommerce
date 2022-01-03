import styled from 'styled-components'

export const SHiddenLabel = styled.span`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`
export const Sform = styled.form`
    display: flex;
    width: 100%;
    max-width: 718px;
    position: relative;
`
export const Swrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 797px) {
        max-width: 280px;
        margin: 0 auto;
        margin-bottom: 10px;
        margin-top: 10px
    }
`
export const Sinput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #7A7A7A;
`
export const Sbutton = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    margin-left: -10px;
`

