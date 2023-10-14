export class TitleRequest{
    landlocation: string;
    dimension: number;
    tel: string;
    amount:number;
    requeser : string;
    letter: File | null;

    constructor(){
        this.amount = 0;
        this.dimension = 0;
        this.tel = '';
        this.landlocation = '';
        this.letter = null;
        this.requeser = '';
    }
}