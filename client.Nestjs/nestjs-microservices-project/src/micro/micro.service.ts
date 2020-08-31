import { Injectable } from '@nestjs/common';
import { Transport, ClientProxyFactory, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MicroService {
    private client: ClientProxy
    constructor() {
            this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options : {
                url: 'redis://127.0.0.1:6379',
            },
        });
    }
    public accumulate(data:number[]):Observable<number> {
        return this.client.send<number, number[]>('add', data);
    }
}