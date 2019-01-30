const path = require("path")
const koa = require("koa")
const KoaStaticServer = require("koa-static-server")
const render = require("vue-server-renderer").createRenderer()
const createApp = require("./server.bundle").default
const server = new koa()


server.use(async (ctx,next) => {

	const app = await createApp(ctx)
	if(app === null)
		return next()
	
	const html = await render.renderToString(app)	
	ctx.body = 	`
<!DOCTYPE html><!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>VueSSR</title><link href="css/main.5ade54ea.bundle.css" rel="stylesheet"></head><body>${html}<script type="text/javascript" src="js/vendors~main.8bf30e81.bundle.js"></script><script type="text/javascript" src="js/main.5ade54ea.bundle.js"></script></body></html>
	`
})

server.use(KoaStaticServer({
	rootDir: path.resolve(__dirname, "./client"),
  rootPath: "/"
}))
server.listen(9999)


