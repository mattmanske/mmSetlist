//-----------  Imports  -----------//

import React         from 'react'

import kikehSongs    from 'data/kikeh'

import DemoForm      from 'containers/DemoForm'

import SongBlock     from 'components/SongBlock'
import PageWrapper   from 'components/PageWrapper'
import BoundsWrapper from 'components/BoundsWrapper'

//-----------  Definitions  -----------//

const title       = 'Homepage'
const description = 'Welcome to this page.'

//-----------  Component  -----------//

class HomeRoute extends React.Component {

  render(){
    const { searchActions, ...props } = this.props

    return (
      <PageWrapper title={title} description={description}>
        <BoundsWrapper type='block'>
          {kikehSongs && kikehSongs.map((song, index) => (
            <SongBlock key={index} song={song} />
          ))}
        </BoundsWrapper>
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

HomeRoute.propTypes = {}

//-----------  Exports  -----------//

export default HomeRoute
