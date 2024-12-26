export interface IColumn {
    id: string;
    title: string;
    type: string;
    settings_str: string;
}

type ColumnType =
    | 'auto_number'
    | 'long_text'
    | 'board_relation'
    | 'mirror'
    | 'button'
    | 'name'
    | 'checkbox'
    | 'numbers'
    | 'color_picker'
    | 'people'
    | 'country'
    | 'phone'
    | 'creation_log'
    | 'progress'
    | 'date'
    | 'rating'
    | 'dependency'
    | 'status'
    | 'doc'
    | 'subtasks'
    | 'dropdown'
    | 'tags'
    | 'email'
    | 'team'
    | 'file'
    | 'text'
    | 'formula'
    | 'timeline'
    | 'hour'
    | 'time_tracking'
    | 'item_assignees'
    | 'vote'
    | 'item_id'
    | 'week'
    | 'last_updated'
    | 'world_clock'
    | 'link'
    | 'unsupported'
    | 'location';

export interface ColumnArgs {
    boardId: number;
    title: string;
    description?: string;
    afterColumnId?: string;
    defaults?: Record<string, any>;
    columnType: ColumnType;
}