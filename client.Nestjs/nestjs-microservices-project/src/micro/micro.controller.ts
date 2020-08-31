import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MicroService } from './micro.service';
import { Observable } from 'rxjs';

@Controller('micro')
export class MicroController {
    private logger = new Logger('AppController');
    constructor(private microService: MicroService) {}

    @Post('add')
    async accumulate(@Body('data') data: number[]):Promise<Observable<number>>{
        this.logger.log('Adding ' + data.toString());
        return this.microService.accumulate(data);
    }
}
