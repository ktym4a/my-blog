import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Image from '@components/Image'

interface props {
  article: any
}

const BlogItem: React.FC<props> = ({ article }) => {
  if (!article) return null

  const frontmatter = article.node.frontmatter
  const slug = article.node.fields.slug

  const imageSource = frontmatter.thumbnail.narrow.fluid
  return (
    <Item to={`blog/${slug}`}>
      <ImageContainer>
        <Image src={imageSource} />
      </ImageContainer>
      <TextContainer>
        <Title>{frontmatter.title}</Title>
        <Excerpt>{frontmatter.excerpt}</Excerpt>
        <MetaData>{frontmatter.date}</MetaData>
      </TextContainer>
    </Item>
  )
}

export default BlogItem

const Item = styled(Link)`
  border-radius: 15px;
  padding: 20px;
  background: #ededed;
  box-shadow: 5px 5px 5px #c9c9c9, -5px -5px 5px #ffffff;
  display: block;
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 220px;

  & > div {
    height: 100%;
  }
`

const TextContainer = styled.div`
  width: 100%;
`

const Title = styled.h2`
  font-size: 21px;
  transition: color 0.3s ease-in-out;
  font-family: ${p => p.theme.fonts.serif};
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
