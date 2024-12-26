import {ApiClient} from "../classes/ApiClient";
import {MutationCreate_ColumnArgs} from "../generated/schema-types";
import {Column} from "../classes/Column";

interface MondayClientConfig {
    apiToken: string;
    baseUrl?: string;
}

export class MondayClient {
    private apiClient: ApiClient;

    constructor(config: MondayClientConfig) {
        this.apiClient = new ApiClient(config.baseUrl || 'https://api.monday.com/v2', config.apiToken);

    }

    async createColumn(columnData: MutationCreate_ColumnArgs): Promise<Column> {
        const column = new Column(this.apiClient, {...columnData});
        await column.create();
        return column;
    }

    // async createColumns(boardId: number, columnsData: Array<Omit<ColumnArgs, 'id' | 'boardId'>>): Promise<Column[]> {
    //     const createdColumns: Column[] = [];
    //
    //     for (const columnData of columnsData) {
    //         const column = await this.createColumn({...columnData, boardId});
    //         createdColumns.push(column);
    //     }
    //
    //     return createdColumns;
    // }
}