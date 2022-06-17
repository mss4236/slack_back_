/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// 실제 동작은 service에서 (트랜젝션 단위로 만들어주면 좋음)
// service는 req, res 모름(독립적으로 사용가능, service에서 req, res 쓰면 나누는 이유가 없음)
// req, rest를 알면 test를 할때 mocking(외부에 의존하는 부분을 임의의로 가짜로 대체) 해줘야함
@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getUser(): string {
    return `getUser process.env.SECRET: ${process.env.SECRET} 
            // getUser this.configService.get('SECRET'): ${this.configService.get('SECRET')}`;
  }

  postUser(): string {
    return 'postUser Success';
  }
}
