const path = require("path")
const koa = require("koa")
const pug = require("pug")
const KoaStaticServer = require("koa-static-server")
const manifest = require("./client/manifest.json")
const render = require("vue-server-renderer").createRenderer()
const createApp = require("./server.bundle").default
const server = new koa()
const routerManifest = ["/","/company","/school","/home"]



server.use(async (ctx,next) => {

	const url = ctx.url
	if(!routerManifest.includes(url))
		return next()

	const {app,state} = await createApp(ctx) || {}
	const renderedString = await render.renderToString(app)
	ctx.body = 	pug.renderFile(path.resolve(__dirname,"./index.pug"),{
		state,
		renderedString,
		manifest:Object.values(manifest)
	})
})


server.use((ctx,next) => {
	if(ctx.url === '/api/list'){
		ctx.body = ["YEP","成功","得到","数据"]
	}
	else
		return next()
})

server.use(KoaStaticServer({
	rootDir: path.resolve(__dirname, "./client"),
  rootPath: "/"
}))
server.listen(7777)


