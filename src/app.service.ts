import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'BackEnd do Simplifica-BPM no ar, seja bem vindo!';
  }
}
