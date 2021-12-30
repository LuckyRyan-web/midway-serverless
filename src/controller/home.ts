import {
  Inject,
  Provide,
  Controller,
  Get,
  Post,
  Query,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import { UserService } from '@/service/home';

@Provide()
@Controller('/')
export class HomeService {
  @Inject()
  ctx: Context;

  @Inject()
  useServer: UserService;

  @Get('/')
  async hello() {
    return 'Hello Midwayjs';
  }

  @Get('/get')
  async get() {
    return this.ctx.query;
  }

  @Post('/post')
  async post() {
    return this.ctx.method;
  }

  @Get('/getServer')
  async getServer(@Query() uid: string): Promise<APIHome.HomeServerResponse> {
    const users = await this.useServer.getUser({
      uid,
    });

    return {
      uid: users.uid,
      username: users.username,
      phone: users.phone,
      email: users.email,
    };
  }
}
