import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroService {
    public accumulate(data: number[]): number {
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }
}
