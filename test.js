import test from 'ava'
import findIndex from './findIndex'

test(t => {
  t.is(findIndex([1, 2, 3], 2), 1, 'no good')
})
