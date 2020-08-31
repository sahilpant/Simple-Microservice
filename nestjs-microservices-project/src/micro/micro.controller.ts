import { Controller, Logger } from '@nestjs/common';
import { MicroService } from './micro.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('micro')
export class MicroController {
    private logger = new Logger('AppController');
    constructor(private microService: MicroService) {}

    @MessagePattern('add')
    async accumulate(data: number[]): Promise<number>{
        this.logger.log('Adding ' + data.toString());
        return this.microService.accumulate(data);
    }
}
