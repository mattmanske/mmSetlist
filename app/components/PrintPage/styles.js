//-----------  Imports  -----------//

import styled            from 'styled-components'

import vars              from 'styles/variables'
import mixins            from 'styles/mixins'

import { paperWidthMM,
         paperHeightMM } from './constants'

//-----------  Print Page  ----------- */

const Wrapper = styled.div`
  background   : ${vars.white};
  box-shadow   : ${vars.shadow};
  display      : inline-block;
  margin-left  : auto;
  margin-right : auto;
  padding      : 10mm 10mm 15mm;
  position     : relative;

  & + * {
    margin-top: ${vars.gutterLg};
  }

  @media print {
    box-shadow : none;
    margin     : 0;
    padding    : 0;
  }
`

const Content = styled.div`
  align-items     : stretch;
  display         : flex;
  flex-direction  : column;
  height          : ${`${paperHeightMM}mm`};
  justify-content : flex-start;
  overflow        : hidden;
  width           : ${`${paperWidthMM}mm`};
`

const Section = styled.div`
  flex     : ${p => `0 0 ${paperHeightMM/p.sections}mm`};
  height   : ${p => `${paperHeightMM/p.sections}mm`};
  position : relative;

  > * {
    ${ mixins.verticalAlign() }

    width: 100%;
  }
`

const Count = styled.small`
  color      : ${vars.gray};
  font-size  : 0.64em;
  font-style : italic;
  position   : absolute;
  right      : 10mm;
  top        : 8mm;

  @media print {
    display: none;
  }
`

//-----------  Exports  ----------- */

export default { Wrapper, Content, Section, Count }
