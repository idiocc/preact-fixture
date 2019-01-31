import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import preactFixture from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof preactFixture, 'function')
  },
  async 'calls package without error'() {
    await preactFixture()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await preactFixture({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T