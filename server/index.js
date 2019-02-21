const path = require("path")
const koa = require("koa")
const fs = require("fs")
const KoaStaticServer = require("koa-static-server")
const server = new koa()

server.use( (ctx,next) => {
	const url = ctx.url
	if(/\.js/.test(url) || /\.css/.test(url))
		return next()

	const html =  fs.readFileSync(path.resolve(__dirname,"./client/index.html"),"utf-8")
	ctx.body = html
})
server.use(KoaStaticServer({
	rootDir: path.resolve(__dirname, "./client"),
  rootPath: "/"
}))
server.listen(7777)


