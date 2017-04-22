//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import Helmet               from 'react-helmet'

//-----------  Component  -----------//

const PageWrapper = ({ title, description, children, ...props }) => {
  const helmetMeta = [{ name: 'description', content: description }]

  return (
    <Block.Elem { ...props }>
      <Helmet title={title} meta={helmetMeta} />
      {children}
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

PageWrapper.propTypes = {
  title       : PropTypes.string,
  description : PropTypes.string,
  children    : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default PageWrapper
