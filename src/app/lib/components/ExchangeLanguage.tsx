import { Images } from "assets"
import styled from "styled-components"

export const ExchangeLanguage = () => (
    <Exchange src={Images.Exchange}/>
)

const Exchange = styled.img`
    cursor: pointer;
    width: 22px;
    height: 22px;
`