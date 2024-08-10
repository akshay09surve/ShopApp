import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`

const Logo = styled.h1``
const Desc = styled.p``
const SocialContainer = styled.div``
const SocialIcon = styled.div``

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SAKA</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, maiores libero. Repellendus a in et, nesciunt explicabo, ut cum perferendis sed veritatis fugit, nemo harum eveniet nam culpa neque. Asperiores?</Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer