import React from 'react'
import styled from 'styled-components'
import { Npm } from 'styled-icons/fa-brands/Npm'
import { Github } from 'styled-icons/icomoon/Github'

export default styled.header`
  text-align: center;
  margin-bottom: 2em;
  ul {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 1em;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`

export const NPM = styled(Npm).attrs({
  size: `3em`,
})``

export const GitHub = styled(Github).attrs({
  size: `2em`,
})`
  vertical-align: 0.15em;
`

const GatsbyLogo = (props) => (
  <svg viewBox="0 0 28 28" {...props}>
    <path
      d="m25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5l-11.5-11.5c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3c-2-2.7-5.2-4.5-8.9-4.5-5.2 0-9.6 3.7-10.7 8.6l13.2 13.2c4.8-1.2 8.5-5.6 8.5-10.8z"
      fill="transparent"
    />
    <path
      d="m3 14.1c0 2.8 1.1 5.5 3.2 7.6s4.9 3.2 7.6 3.2z"
      fill="transparent"
    />
    <path d="m14 0c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-7.8 21.8c-2.1-2.1-3.2-4.9-3.2-7.6l10.9 10.8c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9-13.1-13.1c1.1-4.9 5.5-8.6 10.7-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.2 2.5-8.5 6l11.5 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8v-2h7c0 5.2-3.7 9.6-8.6 10.7z" />
  </svg>
)

export const Gatsby = styled(GatsbyLogo)`
  width: 2em;
  fill: currentColor;
`
