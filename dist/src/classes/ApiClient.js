"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiClient {
    constructor(baseUrl, apiToken) {
        this.api = axios_1.default.create({
            baseURL: baseUrl,
            headers: {
                Authorization: apiToken,
                'Content-Type': 'application/json',
            },
        });
    }
    /**
     * Executes a GraphQL query or mutation
     * @param query The GraphQL query or mutation string
     * @param variables The variables to pass with the GraphQL query
     * @returns The data from the API response
     */
    async execute(query, variables) {
        try {
            const response = await this.api.post('', { query, variables });
            if (response.data.errors) {
                console.error('GraphQL errors:', response.data.errors);
                throw new Error('GraphQL request failed.');
            }
            return response.data.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error('Error making API call:', error.response?.data || error.message);
            }
            else {
                console.error('Unexpected error:', error);
            }
            throw error;
        }
    }
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=ApiClient.js.map