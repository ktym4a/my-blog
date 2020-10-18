import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

interface HelmetProps {
  description?: string | null
  image?: string | null
  pathname?: string | null
  title?: string | null
}

const seoQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
      }
    }
  }
`

const SEO: React.FC<HelmetProps> = ({
  description,
  image,
  pathname,
  title,
}) => {
  const results = useStaticQuery(seoQuery)
  const site = results.site.siteMetadata

  const pageUrl = pathname ? `${site.siteUrl}/${pathname}` : site.siteUrl

  const fullURL = (path: string) => (path ? `${path}` : site.siteUrl)

  // If no image is provided lets looks for a default novela static image
  image = image ? `${site.siteUrl}${image}` : `${site.siteUrl}/preview.png`

  // Checks if the source of the image is hosted on Contentful
  if (`${image}`.includes('ctfassets')) {
    image = `${image}`
  } else {
    image = fullURL(image)
  }

  const metaTags = [
    { charset: 'utf-8' },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#fff',
    },
    {
      name: 'google-site-verification',
      content: '813pN3Tv_MeWoHVF5ogTDSNhdDkAR1e4bjqyTSZhzQ8',
    },
    { itemprop: 'name', content: title || site.title },
    { itemprop: 'description', content: description || site.description },
    { itemprop: 'image', content: image },
    { name: 'description', content: description || site.description },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: site.title },
    { name: 'twitter:title', content: title || site.title },
    { name: 'twitter:description', content: description || site.description },
    { name: 'twitter:creator', content: site.author },
    {
      name: 'twitter:image',
      content: image,
    },

    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title || site.title },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: image },
    { property: 'og:description', content: description || site.description },
    { property: 'og:site_name', content: site.title },
  ]

  return (
    <Helmet
      title={title || site.title}
      htmlAttributes={{ lang: 'en' }}
      meta={metaTags}
    />
  )
}

export default SEO
