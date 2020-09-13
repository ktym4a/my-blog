import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const BlogItem: React.FC = ({ article, slug }) => {
  return (
    <Item to={slug}>
      <ImageContainer>
        <Image src={article.thumbnail.childImageSharp.fluid.src} alt="" />
      </ImageContainer>
      <TextContainer>
        <Title>{article.title}</Title>
        <Excerpt>{article.excerpt}</Excerpt>
        <MetaData>{article.date}</MetaData>
      </TextContainer>
    </Item>
  )
}

export default BlogItem

const Item = styled(Link)`
  border-radius: 15px;
  padding: 25px;
  background: #ededed;
  box-shadow: 5px 5px 5px #c9c9c9, -5px -5px 5px #ffffff;
  display: flex;
  margin-bottom: 15px;
`

const ImageContainer = styled.div`
  width: 50%;
`

const TextContainer = styled.div`
  width: 50%;
`

const Image = styled.img`
  margin: 0;
  width: 100%;
  height: auto;
`

const Title = styled.h2`
  font-size: 21px;
  transition: color 0.3s ease-in-out;
`

const Excerpt = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

const MetaData = styled.div`
  font-weight: 600;
  font-size: 16px;
  opacity: 0.33;
`
