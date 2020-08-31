import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger  = new Logger('Main');

const microserviceOptions = {
  transport: Transport.REDIS,
  options : {
    url: 'redis://127.0.0.1:6379',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => logger.log('Microservice is Running'))
}
bootstrap();
