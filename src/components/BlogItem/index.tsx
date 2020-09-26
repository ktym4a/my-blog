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
  const timeToRead = article.node.timeToRead
  const imageSource = frontmatter.thumbnail.narrow.fluid
  return (
    <Item to={`blog/${slug}`}>
      <ImageContainer>
        <Image src={imageSource} />
      </ImageContainer>
      <TextContainer>
        <Title>{frontmatter.title}</Title>
        <Excerpt>{frontmatter.excerpt}</Excerpt>
      </TextContainer>
      <MetaData>
        {frontmatter.date} - {timeToRead} min read
      </MetaData>
    </Item>
  )
}

export default BlogItem

const Item = styled(Link)`
  border-radius: 15px;
  padding: 20px 20px 10px;
  background: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.colors.neumorphism};
  font-family: ${p => p.theme.fonts.serif};
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: ${p => p.theme.colors.hoverNeumorphism};
  }
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 220px;
  margin-bottom: 7.5px;
  & > div {
    height: 100%;
  }
`

const TextContainer = styled.div`
  width: 100%;
`

const Title = styled.h2`
  font-size: 2.3rem;
  font-weight: 900;
  font-family: ${p => p.theme.fonts.montserrat};
  color: ${p => p.theme.colors.boldColor};
  margin-bottom: 2.5px;
  transition: color 0.3s ease-in-out;
`

const Excerpt = styled.p`
  font-size: 1.4rem;
  color: ${p => p.theme.colors.textNormal};
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
  margin-bottom: 15px;
`

const MetaData = styled.div`
  font-size: 1rem;
  color: ${p => p.theme.colors.grey};
  text-align: right;
  margin-top: auto;
`
