export class TitleTransfer{
    titleNumber: number;
    prevOwner: string;
    newOwner: string;
    technicalDocuments: File[]; // Assuming you handle file input using <input type="file">
    letter: File | null;

    constructor() {
        this.titleNumber = 0;
        this.prevOwner = '';
        this.newOwner = '';
        this.technicalDocuments = [];
        this.letter = null;
    }
}