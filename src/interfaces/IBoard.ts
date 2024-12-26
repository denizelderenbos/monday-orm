import {IActivityLog} from './IActivityLog';
import {IColumn} from './IColumn';
import {IGroup} from './IGroup';
import {ITag} from './ITag';
import {IUser} from './IUser';
import {ITeam} from './ITeam';
import {IWorkspace} from './IWorkspace';

export interface IBoard {
    id: number;
    name: string;
    description?: string;
    boardFolderId?: number;
    boardKind: 'public' | 'private' | 'share';
    columns?: IColumn[];
    communication?: string;
    creator: IUser;
    groups?: IGroup[];
    itemTerminology?: string;
    itemsCount?: number;
    owners?: IUser[];
    permissions: 'assignee' | 'collaborators' | 'everyone' | 'owners';
    state: 'active' | 'archived' | 'deleted';
    subscribers?: IUser[];
    tags?: ITag[];
    teamOwners?: ITeam[];
    teamSubscribers?: ITeam[];
    topGroup?: IGroup;
    type: 'board' | 'custom_object' | 'document' | 'sub_items_board';
    updatedAt?: string;
    url: string;
    workspace?: IWorkspace;
    workspaceId?: number;
}