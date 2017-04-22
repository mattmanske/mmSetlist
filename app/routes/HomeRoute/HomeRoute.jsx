//-----------  Imports  -----------//

import Block      from './styles'

import kikehSongs from 'data/kikeh'

import chunk      from 'lodash/chunk'

import React      from 'react'

import SongBlock  from 'components/SongBlock'
import PrintPage  from 'components/PrintPage'

//-----------  Definitions  -----------//

const title       = 'Setlist'
const description = 'Kikeh Mato'
const perPage     = 8

//-----------  Component  -----------//

class HomeRoute extends React.Component {

  render(){
    const { searchActions, ...props } = this.props

    const groups = chunk(kikehSongs, perPage)

    return (
      <Block.Page title={title} description={description}>
        {groups.map((songs, index) => (
          <PrintPage key={index} sections={perPage} pgCount={groups.length} pgNumber={index+1}>
            {songs.map((song, index) => (
              <SongBlock key={index} song={song} />
            ))}
          </PrintPage>
        ))}
      </Block.Page>
    )
  }
}

//-----------  Prop Types  -----------//

HomeRoute.propTypes = {}

//-----------  Exports  -----------//

export default HomeRoute
