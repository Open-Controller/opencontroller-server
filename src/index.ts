import Koa from 'koa';
import { House } from "@open-controller/lib"

export const createServer = (house:House,port:number=3612)=>{
  const app = new Koa();

  app.use(async ctx => {
    ctx.is('application/json');
    ctx.body = JSON.stringify(house);
  });

  app.listen(port);
}
