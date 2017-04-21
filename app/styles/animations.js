//-----------  Imports  -----------//

import { keyframes } from 'styled-components'

//-----------  Animations  -----------//

const jelly = keyframes`
  0% { transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  3.333333% { transform: matrix3d(0.32778, 0, 0, 0, 0, 0.32778, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  6.666667% { transform: matrix3d(0.69875, 0, 0, 0, 0, 0.69875, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  10% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  13.333333% { transform: matrix3d(1.1815, 0, 0, 0, 0, 1.1815, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  16.666667% { transform: matrix3d(1.24402, 0, 0, 0, 0, 1.24402, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  20% { transform: matrix3d(1.21871, 0, 0, 0, 0, 1.21871, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  23.333333% { transform: matrix3d(1.14702, 0, 0, 0, 0, 1.14702, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  26.666667% { transform: matrix3d(1.06589, 0, 0, 0, 0, 1.06589, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  30% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  33.333333% { transform: matrix3d(0.9603, 0, 0, 0, 0, 0.9603, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  36.666667% { transform: matrix3d(0.94663, 0, 0, 0, 0, 0.94663, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  40% { transform: matrix3d(0.95217, 0, 0, 0, 0, 0.95217, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  43.333333% { transform: matrix3d(0.96784, 0, 0, 0, 0, 0.96784, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  46.666667% { transform: matrix3d(0.98559, 0, 0, 0, 0, 0.98559, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  50% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  53.333333% { transform: matrix3d(1.00868, 0, 0, 0, 0, 1.00868, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  56.666667% { transform: matrix3d(1.01167, 0, 0, 0, 0, 1.01167, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  60% { transform: matrix3d(1.01046, 0, 0, 0, 0, 1.01046, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  63.333333% { transform: matrix3d(1.00703, 0, 0, 0, 0, 1.00703, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  66.666667% { transform: matrix3d(1.00315, 0, 0, 0, 0, 1.00315, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  70% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  73.333333% { transform: matrix3d(0.9981, 0, 0, 0, 0, 0.9981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  76.666667% { transform: matrix3d(0.99745, 0, 0, 0, 0, 0.99745, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  80% { transform: matrix3d(0.99771, 0, 0, 0, 0, 0.99771, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  83.333333% { transform: matrix3d(0.99846, 0, 0, 0, 0, 0.99846, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  86.666667% { transform: matrix3d(0.99931, 0, 0, 0, 0, 0.99931, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  90% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  93.333333% { transform: matrix3d(1.00042, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  96.666667% { transform: matrix3d(1.00056, 0, 0, 0, 0, 1.00056, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
`

//-----------  Exports  -----------//

export default {
  jelly
}
