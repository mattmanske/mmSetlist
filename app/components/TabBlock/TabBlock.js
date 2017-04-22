//-----------  Imports  -----------//

import Tab                     from './styles'

import $ from 'jquery'
import { Vex, VexTab, Artist } from 'vextab'

import React, { PropTypes }    from 'react'
import { findDOMNode }         from 'react-dom'

//-----------  Definitions  -----------//

const Renderer = Vex.Flow.Renderer
const Backend  = Renderer.Backends.SVG

const options  = ''
const tabstave = 'tabstave notation=false'

//-----------  Component  -----------//

class TabBlock extends React.Component {

  componentDidMount(){
    this.renderStaff(this.props.tab)
  }

  componentDidUpdate(){
    this.renderStaff(this.props.tab)
  }

  shouldComponentUpdate(nextProps){
    return (this.props.tab != nextProps.tab)
  }

  renderStaff = (tab) => {
    const artist = new Artist(0, 0, 1053, { scale: 0.67 })
    const vextab = new VexTab(artist).parse([options, tabstave, tab].join('\n'))

    $(this.staffRef).find('svg:first').remove()

    artist.render(new Renderer(this.staffRef, Backend))
  }

  render(){
    return (
      <Tab.Staff ref={ref => this.staffRef = findDOMNode(ref)} />
    )
  }
}

//-----------  Prop Types  -----------//

TabBlock.propTypes = {
  tab: PropTypes.string.isRequired
}

//-----------  Export  -----------//

export default TabBlock
