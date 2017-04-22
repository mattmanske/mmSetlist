//-----------  Imports  -----------//

import Page                 from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const PrintPage = ({ sections, pgCount, pgNumber, children, ...props }) => {

  return (
    <Page.Wrapper { ...props }>
      <Page.Content>
        {children.map((child, index) => (
          <Page.Section key={index} sections={sections}>
            {child}
          </Page.Section>
        ))}
      </Page.Content>

      {pgNumber &&
        <Page.Count>
          Page {pgNumber}
          {pgCount && ` of ${pgCount}`}
        </Page.Count>
      }
    </Page.Wrapper>
  )
}

//-----------  Prop Types  -----------//

PrintPage.propTypes = {
  pgCount  : PropTypes.number,
  pgNumber : PropTypes.number,
  sections : PropTypes.number.isRequired,
  children : PropTypes.array.isRequired,
}

//-----------  Export  -----------//

export default PrintPage
