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
  const slug = article.node.slug
  const timeToRead = article.node.timeToRead
  const imageSource = frontmatter.post_img.list.fluid
  return (
    <NeumorphismArticle>
      <Item to={`/${slug}`}>
        <ImageContainer>
          <Image src={imageSource} alt={frontmatter.title} />
        </ImageContainer>
        <TextContainer>
          <Title>{frontmatter.title}</Title>
          <Excerpt>{frontmatter.excerpt}</Excerpt>
        </TextContainer>
        <MetaData>
          {frontmatter.date} - {timeToRead} min read
        </MetaData>
      </Item>
    </NeumorphismArticle>
  )
}

export default BlogItem

const NeumorphismArticle = styled.article`
  border-radius: 15px;
  background: ${(p: any) => p.theme.colors.background};
  box-shadow: ${(p: any) => p.theme.colors.neumorphism};
  font-family: ${(p: any) => p.theme.fonts.serif};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${(p: any) => p.theme.colors.hoverNeumorphism};
  }
`

const Item = styled(Link)`
  padding: 20px 20px 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 767px) {
    padding: 15px 15px 10px;
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

  @media screen and (max-width: 767px) {
    height: 150px;
  }
`

const TextContainer = styled.div`
  width: 100%;
`

const Title = styled.h2`
  font-size: 2.3rem;
  font-weight: 900;
  font-family: ${(p: any) => p.theme.fonts.montserrat};
  color: ${(p: any) => p.theme.colors.boldColor};
  margin-bottom: 2.5px;
  transition: ${(p: any) => p.theme.colors.colorModeTransition};
`

const Excerpt = styled.p`
  font-size: 1.4rem;
  color: ${(p: any) => p.theme.colors.textNormal};
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
  font-size: 1.2rem;
  color: ${(p: any) => p.theme.colors.grey};
  text-align: right;
  margin-top: auto;
`
