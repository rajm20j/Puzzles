export interface IOptions {
    operators: IOperator[];
    time: string;
    lives: number;
}

export interface IOperator {
    symbol: string;
    enabled: boolean;
}