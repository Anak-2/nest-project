import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Session,
  Param,
  Body,
  Query,
  Headers,
  Ip,
  HostParam,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test/:id')
  exampleGetMethod(
    @Req() req: Request,
    @Res() res: Response,
    @Session() session: any,
    @Param('id') id: string,
    @Query('name') query: any,
    @Headers() headers: any,
    @Ip() ip: string,
    @HostParam() hosts: any,
  ): void {
    // 각 요청 데이터를 출력
    console.log('Request URL:', req.url);
    console.log('Session:', session);
    console.log('Param id:', id);
    console.log('Query:', query);
    console.log('Headers:', headers);
    console.log('IP Address:', ip);
    console.log('Hosts:', hosts);

    // 응답 보내기
    res.status(200).send('success');
  }

  @HttpCode(201)
  @Post('test')
  examplePostMethod(
    @Req() req: Request,
    @Session() session: any,
    @Param('id') id: string,
    @Body() body: any,
    @Query() query: any,
    @Headers() headers: any,
    @Ip() ip: string,
    @HostParam() hosts: any,
  ) {
    // 각 요청 데이터를 출력
    console.log('Request URL:', req.url);
    console.log('Body:', body);

    // 응답 보내기
    return 'post success';
  }
}
