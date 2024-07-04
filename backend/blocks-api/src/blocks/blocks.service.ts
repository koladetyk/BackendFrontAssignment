//blocks/blocks.service.ts
import {Injectable} from '@nestjs/common';
import { Block } from './blocks.entity';

@Injectable()
export class BlocksService {
    private readonly blocks: Block[] = [
        {
            address: '0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e',
            balance: 542,
            gasUsed: 3051
        },
        {
            address: '0xffaa6990069ecba8570dab82cba2caf6ff77b8fa',
            balance: 690,
            gasUsed: 4665
        },
        {
            address: '0xc7c7b0001efd1c4fa1369a36f1bcf98fbf8c9ba',
            balance: 654,
            gasUsed: 2232
        }
    ];

    getAddresses(): string[] {
        return this.blocks.map(block => block.address);
    }

    getDetail(address: string): Block {
        const block = this.blocks.find(block => block.address === address);
        return block;
    }

}
