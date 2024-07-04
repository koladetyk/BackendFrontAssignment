//transactions/transactions.entity.ts
export class  Transaction{
    source: string;
    destination: string;
    amount: number;
    status: string;
    gasUsed: { type: number, optional: true };
    receiptHash: { type: string, optional: true };
}