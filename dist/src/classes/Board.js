"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.kind = data.board_kind;
        this.creator = data.creator;
        this.url = data.url;
    }
    // Optional methods to encapsulate board-specific logic
    getSummary() {
        return `${this.name} (${this.kind})`;
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map