import moduleAlias from 'module-alias'
import next from 'next'
import { createServer } from 'http'
import { parse } from 'url' 

import { IS_DEV, WEB_PORT, STATIC_PATH } from './const'

if(!IS_DEV) {
  moduleAlias.addAlias('react', 'preact-compat')
  moduleAlias.addAlias('react-dom', 'preact-compat')
}

const app = next({ dev: IS_DEV })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/about' ) {
      app.render(req, res, '/about', query)
    } else if (pathname === '/read') {
      app.render(req, res, '/read', req.query)
    } else if (pathname === 'watch') {
      app.render(req, res, '/watch', req.query)
    } else if (pathname === '/partners') {
      app.render(req, res, '/partners', req.query)
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(WEB_PORT, (err) => {
    if (err) throw err
    console.log(`=> Ready on http://localhost:${WEB_PORT}`)
  })
})

