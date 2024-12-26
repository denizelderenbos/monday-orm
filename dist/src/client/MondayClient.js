"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MondayClient = void 0;
const ApiClient_1 = require("../classes/ApiClient");
const Column_1 = require("../classes/Column");
// interface CreateBoardInput {
//     name: string;
//     kind: 'public' | 'private' | 'share';
//     ownerIds?: number[];
//     subscriberIds?: number[];
//     subscriberTeamIds?: number[];
//     description?: string;
//     folderId?: number;
//     templateId?: number;
//     workspaceId?: number;
// }
class MondayClient {
    constructor(config) {
        this.apiClient = new ApiClient_1.ApiClient(config.baseUrl || 'https://api.monday.com/v2', config.apiToken);
    }
    // async createBoard(input: CreateBoardInput): Promise<Board> {
    //     const query = `
    //     mutation createBoard(
    //         $boardName: String!,
    //         $boardKind: BoardKind!,
    //         $ownerIds: [ID!],
    //         $subscriberIds: [ID!],
    //         $subscriberTeamIds: [ID!],
    //         $description: String,
    //         $folderId: ID,
    //         $templateId: ID,
    //         $workspaceId: ID
    //     ) {
    //         create_board(
    //             board_name: $boardName,
    //             board_kind: $boardKind,
    //             board_owner_ids: $ownerIds,
    //             board_subscriber_ids: $subscriberIds,
    //             board_subscriber_teams_ids: $subscriberTeamIds,
    //             description: $description,
    //             folder_id: $folderId,
    //             template_id: $templateId,
    //             workspace_id: $workspaceId
    //         ) {
    //             id
    //             name
    //             description
    //             board_kind
    //             creator {
    //                 id
    //                 name
    //                 email
    //             }
    //             url
    //         }
    //     }
    // `;
    //
    //     const variables = {
    //         boardName: input.name,
    //         boardKind: input.kind,
    //         ownerIds: input.ownerIds,
    //         subscriberIds: input.subscriberIds,
    //         subscriberTeamIds: input.subscriberTeamIds,
    //         description: input.description,
    //         folderId: input.folderId,
    //         templateId: input.templateId,
    //         workspaceId: input.workspaceId,
    //     };
    //
    //     try {
    //         const response = await this.api.post('', {query, variables});
    //         const data = response.data.data.create_board;
    //         return new Board(data); // Return an instance of the IBoard class
    //     } catch (error) {
    //         if (axios.isAxiosError(error)) {
    //             console.error('Axios error creating board:', error.response?.data || error.message);
    //         } else {
    //             console.error('Unexpected error creating board:', error);
    //         }
    //         throw error;
    //     }
    // }
    //
    // async getBoard(id: number): Promise<Board | null> {
    //     const query = `
    //     query getBoard($id: ID!) {
    //         boards(ids: [$id]) {
    //             id
    //             name
    //             description
    //             board_kind
    //             creator {
    //                 id
    //                 name
    //                 email
    //             }
    //             url
    //         }
    //     }
    // `;
    //
    //     const variables = {id};
    //
    //     try {
    //         const response = await this.api.post('', {query, variables});
    //         const boards = response.data.data.boards;
    //         return boards.length > 0 ? new Board(boards[0]) : null; // Return the first board or null if not found
    //     } catch (error) {
    //         if (axios.isAxiosError(error)) {
    //             console.error('Axios error fetching board:', error.response?.data || error.message);
    //         } else {
    //             console.error('Unexpected error fetching board:', error);
    //         }
    //         throw error;
    //     }
    // }
    //
    // async createItem(itemData: Omit<ItemData, 'id'>): Promise<Item> {
    //     const item = new Item(this.api, {...itemData});
    //     await item.create();
    //     return item;
    // }
    async createColumn(columnData) {
        const column = new Column_1.Column(this.apiClient, { ...columnData });
        await column.create();
        return column;
    }
}
exports.MondayClient = MondayClient;
//# sourceMappingURL=MondayClient.js.map