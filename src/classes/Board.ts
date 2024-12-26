import {IUser} from '../interfaces/IUser';

export class Board {
    id: number;
    name: string;
    description?: string;
    kind: 'public' | 'private' | 'share';
    creator: IUser;
    url: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.kind = data.board_kind;
        this.creator = data.creator;
        this.url = data.url;
    }

    // Optional methods to encapsulate board-specific logic
    getSummary(): string {
        return `${this.name} (${this.kind})`;
    }
}