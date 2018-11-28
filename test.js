import test from 'ava'
import findIndex from './index'

test(t => {
  t.is(findIndex([1, 2, 3], 2), 1, 'no good')
})
