import { Images } from "../../../assets"
import styled from "styled-components"
import { useTranslations } from "../hooks"
import { APP_CONFIG } from "../config"

export const Header = () => {
    const T = useTranslations()
    
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={Images.Logo}/>
                <Title>
                    {T.components.header.title}
                </Title>
            </LogoContainer>
            <LinkContainer>
                <Link 
                    href={APP_CONFIG.GITHUB_URL}
                    target='_blank'
                >
                    {T.components.header.github}
                </Link>
                <Link 
                    href={APP_CONFIG.DISCORD_URL}
                    target='_blank'
                >
                    {T.components.header.discord}
                </Link>
            </LinkContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    flex-directon: row;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.foreground};
`

const LogoContainer = styled.div`
    disply: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
`

const Logo = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 10px;
`

const Title = styled.h1`
    display: inline;
    flex-direction: row;
    font-size: 20px;
    padding: 0 5px;
    color: ${({ theme }) => theme.colors.typography};
`

const LinkContainer = styled.div`
`

const Link = styled.a`
    color: ${({ theme }) => theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
    padding: 10px 10px;
`