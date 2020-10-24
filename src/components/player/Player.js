import React from 'react'
import { compose, withProps } from 'recompose'
import ReactPlayer from 'react-player'

const Player = compose(
  withProps({
    url: null
  })
)(({ url }) => <ReactPlayer url={url} />)

export default Player
