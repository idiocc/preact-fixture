import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import preactFixture from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await preactFixture({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
