import fs from 'node:fs/promises'
import express from 'express'

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173

// Cached production assets
const templateHtml = isProduction
    ? await fs.readFile('./dist/client/index.html', 'utf-8')
    : ''

// Create http server
const app = express()

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite
if (!isProduction) {
    const { createServer } = await import('vite')
    vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
    })
    app.use(vite.middlewares)
} else {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(sirv('./dist/client', { extensions: [] }))
}

let render;
if (isProduction) {
    render = (await import('./dist/server/entry-server.js')).render
}
app.use('*all', async (req, res) => {
    let lastTime = +(new Date());
    let firstTime = +(new Date());

    console.log('1', +(new Date()) - lastTime);
    lastTime = +(new Date());

    try {
        const url = req.originalUrl

        /** @type {string} */
        let template
        /** @type {import('./src/entry-server.js').render} */

        if (!isProduction) {
            // Always read fresh template in development
            template = await fs.readFile('./index.html', 'utf-8')
            template = await vite.transformIndexHtml(url, template)
            render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
        } else {
            template = templateHtml
        }

        console.log('from start to before render', +(new Date()) - lastTime);
        lastTime = +(new Date());

        const rendered = await render(url)

        console.log('RenderTime', +(new Date()) - lastTime);
        lastTime = +(new Date());

        const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '')

        console.log('beforeSending content', +(new Date()) - lastTime);

        // todo statuses
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html);

        console.log('total time', +(new Date()) - firstTime);
    } catch (e) {
        vite?.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
    }
})

// Start http server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})