import { AnsType } from "./ansType";
import { OperatorType } from "./operatorType";

export interface IOptions {
    operators: IOperator[];
    enableTimer: boolean;
    time?: number;
    enableLives: boolean;
    lives: number;
    lowerDigit: number;
    uppderDigit: number;
    answerType: AnsType;
    areChoicesEnabled: boolean,
    numberOfChoices: number;
}

export interface IOperator {
    symbol: OperatorType;
    enabled: boolean;
    isHovered: boolean;
}