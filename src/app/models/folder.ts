export interface Folder {
    id: number;
    name: string;
    parentId?: number;
    childrenIds?: number[];
  }
  