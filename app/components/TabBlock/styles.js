//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Tab Block  ----------- */

const Staff = styled.div`
  background : ${vars.white};
  width      : 100%;

  svg {
    margin         : -2em 0 -1.5em -3.5%;
    pointer-events : none;

    path:nth-child(-n+6) {
      stroke: ${vars.gray};
    }

    text {
      font-size: 12pt;
      font-weight: bold;
      &:last-child {
        display: none;
      }
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
