import { Module } from '@nestjs/common';
import { MicroController } from './micro/micro.controller';
import { MicroService } from './micro/micro.service';

@Module({
  imports: [],
  controllers: [MicroController],
  providers: [MicroService],
})
export class AppModule {}
