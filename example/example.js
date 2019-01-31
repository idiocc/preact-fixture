/* yarn example/ */
import preactFixture from '../src'

(async () => {
  const res = await preactFixture({
    text: 'example',
  })
  console.log(res)
})()