import axios, {AxiosInstance} from 'axios';

export interface ItemData {
    id?: number;
    boardId: number;
    groupId?: string;
    name: string;
    columnValues?: Record<string, any>;
}

export class Item {
    private api: AxiosInstance;

    id?: number;
    boardId: number;
    groupId?: string;
    name: string;
    columnValues?: Record<string, any>;

    constructor(api: AxiosInstance, data: ItemData) {
        this.api = api;
        this.id = data.id;
        this.boardId = data.boardId;
        this.groupId = data.groupId;
        this.name = data.name;
        this.columnValues = data.columnValues;
    }

    async create(): Promise<void> {
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
            const response = await this.api.post('', {query, variables});
            this.id = response.data.data.create_item.id;
            console.log(`Item created with ID: ${this.id}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error creating item:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error creating item:', error);
            }
            throw error;
        }
    }
}