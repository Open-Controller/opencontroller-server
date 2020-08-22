import Koa from 'koa';
import { House } from "@open-controller/lib"

export const createServer = (house:House,port:number=3612)=>{
  const app = new Koa();

  app.use(async ctx => {
    ctx.body = house;
  });

  app.listen(port);
  console.info(`Open Controller server listening on port ${port}`)
}
