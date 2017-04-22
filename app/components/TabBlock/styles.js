//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Tab Block  ----------- */

const Staff = styled.div`
  background : ${vars.white};
  width      : 100%;

  svg {
    margin: -2.5em 0 -2em -1.71em;

    text:last-child {
      display: none;
    }
  }
`

const Broken = styled.div`
  background : ${vars.red};
  color      : ${vars.white};
  padding    : ${vars.guttterLg};
`

//-----------  Exports  ----------- */

export default { Staff, Broken }
