//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Song Block  ----------- */

const Wrapper = styled.div`
  overflow: hidden;
`

const Header = styled.header`
  align-items     : center;
  display         : flex;
  justify-content : space-between;
  margin-bottom   : ${vars.gutter};
`

const Title = styled.h5`
  color          : ${vars.black};
  margin         : 0;
  text-transform : uppercase;

  sup {
    font-size   : 0.5rem;
    margin-left : 1em;

    & + sup {
      margin-left: 0.25em;
    }
  }
`

const Notes = styled.span`
  color       : ${vars.grayDarkest};
  font-family : monospace;
  font-size   : 1em;

  small {
    font-size      : 0.5rem;
    margin-right   : 1em;
    font-style     : italic;
    text-transform : uppercase;
  }
`

//-----------  Exports  ----------- */

export default { Wrapper, Header, Title, Notes }
