//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Bounds Wrapping  -----------//

const Elem = styled.div`
  align-items    : stretch;
  background     : ${vars.grayLightest};
  color          : black;
  display        : flex;
  flex-direction : column;
  font-size      : $emBase;
  font-style     : normal;
  min-height     : 100vh;
  position       : relative;
  z-index        : 1;

  @media print {
    background : ${vars.white};
  }
`

//-----------  Exports  ----------- */

export default { Elem }
