import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService);

  @Get() // GET : /user
  getUsers(@Req() req) {
    return req.user;
  }

  @Post() // POST : /user
  postUsers() {}

  @Post('login') // POST : /users/login
  logIn() {}

  @Post('logout') // POST : /users/logout
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
