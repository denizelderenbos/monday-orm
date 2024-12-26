"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const axios_1 = __importDefault(require("axios"));
class Item {
    constructor(api, data) {
        this.api = api;
        this.id = data.id;
        this.boardId = data.boardId;
        this.groupId = data.groupId;
        this.name = data.name;
        this.columnValues = data.columnValues;
    }
    async create() {
        if (this.id) {
            throw new Error('Item already exists. Use another method to update or manipulate it.');
        }
        const query = `
            mutation createItem(
                $boardId: ID!,
                $groupId: String,
                $itemName: String!,
                $columnValues: JSON
            ) {
                create_item(
                    board_id: $boardId,
                    group_id: $groupId,
                    item_name: $itemName,
                    column_values: $columnValues
                ) {
                    id
                }
            }
        `;
        const variables = {
            boardId: this.boardId,
            groupId: this.groupId,
            itemName: this.name,
            columnValues: this.columnValues ? JSON.stringify(this.columnValues) : undefined,
        };
        try {
            const response = await this.api.post('', { query, variables });
            this.id = response.data.data.create_item.id;
            console.log(`Item created with ID: ${this.id}`);
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error('Error creating item:', error.response?.data || error.message);
            }
            else {
                console.error('Unexpected error creating item:', error);
            }
            throw error;
        }
    }
}
exports.Item = Item;
//# sourceMappingURL=Item.js.map