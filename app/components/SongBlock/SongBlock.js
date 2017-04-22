//-----------  Imports  -----------//

import Song                 from './styles'

import times                from 'lodash/times'

import React, { PropTypes } from 'react'

import TabBlock             from 'components/TabBlock'

//-----------  Component  -----------//

const SongBlock = ({ song }) => {

  const { tab, notes, title, intro, clicks } = song

  return (
    <Song.Wrapper>
      <Song.Header>
        <Song.Title>
          {title}
          {intro && <sup>[ {intro} INTRO ]</sup>}
          {clicks && <sup>[ {clicks} ]</sup>}
        </Song.Title>
        <Song.Notes>
          {notes}
        </Song.Notes>
      </Song.Header>
      <TabBlock tab={tab} />
    </Song.Wrapper>
  )
}

//-----------  Prop Types  -----------//

SongBlock.propTypes = {
  song: PropTypes.object.isRequired
}

//-----------  Export  -----------//

export default SongBlock
