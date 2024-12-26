import axios, {AxiosInstance} from 'axios';

export class ApiClient {
    private api: AxiosInstance;

    constructor(baseUrl: string, apiToken: string) {
        this.api = axios.create({
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
    async execute(query: string, variables: Record<string, any>): Promise<any> {
        try {
            const response = await this.api.post('', {query, variables});
            if (response.data.errors) {
                console.error('GraphQL errors:', response.data.errors);
                throw new Error('GraphQL request failed.');
            }
            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error making API call:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
            throw error;
        }
    }
}