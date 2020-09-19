import styled from 'styled-components'

export const HeroContainer = styled.div`
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  max-height: 999px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => {
    if (props.small) {
      return `
        min-height: 65vh !important;
        max-height: 700px;
      `
    }
  }}

  ${props => {
    if (props.xSmall) {
      return `
        min-height: 40vh !important;
      `
    }
  }}
  
  ${props => props.styles}
`

export const HeroTitle = styled.h1`
  text-align: center;
  font-size: 8em;
  font-weight: 700;
  margin: 0;
  color: ${props => props.color || '#FFFFFF'};

  ${props => props.styles}

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const HeroDescription = styled.h2`
  font-size: 1.7em;
  color: #ffffff;
`

export const HeroFilter = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  content: '';
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`
