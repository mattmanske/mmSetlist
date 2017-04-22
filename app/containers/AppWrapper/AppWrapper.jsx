//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import Helmet               from 'react-helmet'

import ProgressBar          from 'components/ProgressBar'
import ModalWrapper         from 'components/ModalWrapper'

//-----------  Component  -----------//

class AppWrapper extends React.Component {

  state = {
    progress     : -1,
    loadedRoutes : this.props.location && [this.props.location.pathname],
  }

  componentWillMount(){
    this.unsubscribeHistory = this.props.router && this.props.router.listenBefore((location) => {
      if (this.state.loadedRoutes.indexOf(location.pathname) === -1)
        this.updateProgress(0)
    })
  }

  componentWillUpdate(newProps, newState){
    const { loadedRoutes, progress } = this.state
    const { pathname } = newProps.location

    if (loadedRoutes.indexOf(pathname) === -1 && progress !== -1 && newState.progress < 100){
      this.updateProgress(100)
      this.setState({ loadedRoutes: loadedRoutes.concat([pathname]) })
    }
  }

  componentWillUnmount(){
    this.unsubscribeHistory = undefined
  }

  //-----------  Event Handlers  -----------//

  updateProgress = (progress) => {
    this.setState({ progress })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    const isMobile = props.browser.lessThan.small || false

    return(
      <Block.Elem>
        <Helmet
          titleTemplate="%s - mmReduxBaseplate"
          defaultTitle="mmReduxBaseplate"
          meta={[{ name: 'description', content: 'A React/Redux Project Baseplate' }]}
        />

        <ProgressBar percent={state.progress} updateProgress={this.updateProgress} />

        {React.Children.toArray(props.children)}

        <ModalWrapper
          isMobile={isMobile}
          child={props.modal.child}
          props={props.modal.props}
          options={props.modal.options}
          onClose={props.modalActions.hideModal}
        />
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

AppWrapper.propTypes = {
  modal        : PropTypes.object.isRequired,
  location     : PropTypes.object,
  router       : PropTypes.object,
  children     : PropTypes.node.isRequired,
  modalActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default AppWrapper
