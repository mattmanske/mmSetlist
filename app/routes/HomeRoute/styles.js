//-----------  Imports  -----------//

import styled      from 'styled-components'

import PageWrapper from 'components/PageWrapper'

import vars        from 'styles/variables'

//-----------  Page Wrapper  ----------- */

const Page = styled(PageWrapper)`
  padding    : ${vars.gutterLg};
  text-align : center;

  @media print {
    padding: 0;
  }
`

//-----------  Exports  ----------- */

export default { Page }
