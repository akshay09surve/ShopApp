import React from 'react'
import styled from 'styled-components'

const Category = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
const Info = styled.div`
    position:absolute;
    top: 60px;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 10px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
      <Category>
          <Image src={item.img} />
          <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
          </Info>
    </Category>
  )
}

export default CategoryItem
