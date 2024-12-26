"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
class Column {
    constructor(apiClient, data) {
        this.apiClient = apiClient;
        this.id = data.id;
        this.boardId = data.boardId;
        this.title = data.title || '';
        this.description = data.description ?? undefined; // Handle null or undefined
        this.columnType = data.columnType;
    }
    async create() {
        if (this.id) {
            throw new Error('Column already exists. Use another method to update or manipulate it.');
        }
        const query = `
            mutation createColumn(
                $boardId: ID!,
                $title: String!,
                $columnType: ColumnType!,
                $description: String,
                $afterColumnId: ID,
                $defaults: JSON
            ) {
                create_column(
                    board_id: $boardId,
                    title: $title,
                    column_type: $columnType,
                    description: $description,
                    after_column_id: $afterColumnId,
                    defaults: $defaults
                ) {
                    id
                    title
                    description
                }
            }
        `;
        const variables = {
            boardId: this.boardId,
            title: this.title,
            columnType: this.columnType,
            description: this.description,
            afterColumnId: this.afterColumnId,
            defaults: this.defaults ? JSON.stringify(this.defaults) : undefined,
        };
        const data = await this.apiClient.execute(query, variables);
        this.id = data.create_column.id;
        return this;
    }
}
exports.Column = Column;
//# sourceMappingURL=Column.js.map