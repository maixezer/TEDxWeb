import moduleAlias from 'module-alias'
import next from 'next'
import express from 'express'

import { IS_DEV, WEB_PORT, STATIC_PATH } from './const'

if (!IS_DEV) {
  moduleAlias.addAlias('react', 'preact-compat')
  moduleAlias.addAlias('react-dom', 'preact-compat')
}

const app = next({ dev: IS_DEV })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(STATIC_PATH, express.static('static'))

    server.get('/about', (req, res) => {
      return app.render(req, res, '/about', req.query)
    })

    server.get('/read', (req, res) => {
      return app.render(req, res, '/read', req.query)
    })

    server.get('/watch', (req, res) => {
      return app.render(req, res, '/watch', req.query)
    })

    server.get('/partners', (req, res) => {
      return app.render(req, res, '/partners', req.query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(WEB_PORT, (err) => {
      if (err) throw err
      console.log(`=> Ready on http://localhost:${WEB_PORT}`)
    })
  })

