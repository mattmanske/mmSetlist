//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Page Wrapper  ----------- */

const Elem = styled.main`
  background   : ${vars.white};
  box-shadow   : ${vars.shadow};
  margin-left  : auto;
  margin-right : auto;
  overflow-x   : hidden;
  padding      : 40px 25px;

  > div {
    padding: 0;
  }

  @media print {
    box-shadow : none;
    padding    : 0;
  }
`

//-----------  Exports  ----------- */

export default { Elem }
