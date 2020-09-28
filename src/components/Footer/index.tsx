import React from 'react'
import styled from '@emotion/styled'
import { commonWidth } from '@styles/index'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Copylight>© 2020 KTYM4a</Copylight>
        <BrandIcons>
          <SNSLink to="https://github.com/ktym4a/" target="_blank">
            <BrandIcon icon={faGithub} size="lg" />
          </SNSLink>
          <SNSLink
            to="https://www.facebook.com/profile.php?id=100022627637039"
            target="_blank"
          >
            <BrandIcon icon={faFacebook} size="lg" />
          </SNSLink>
        </BrandIcons>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  padding: 20px 0 35px;
`

const FooterWrapper = styled.div`
  ${commonWidth}
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Copylight = styled.div`
  color: ${p => p.theme.colors.textNormal};
  font-size: 1.3rem;
  line-height: 1.3rem;
`

const BrandIcons = styled.div`
  display: flex;
  align-items: center;

  & > a:last-child {
    margin-right: 0;
  }
`

const BrandIcon = styled(FontAwesomeIcon)`
  color: ${p => p.theme.colors.boldColor};
`

const SNSLink = styled(Link)`
  margin-right: 15px;
  transition: 0.3s ease-in-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`
