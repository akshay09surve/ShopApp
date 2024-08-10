import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Category = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
  return (
      <Category>
          {categories.map(item => (
              <CategoryItem item={item} key={item.id}/>
          ))}
    </Category>
  )
}

export default Categories
