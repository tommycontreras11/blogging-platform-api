export type PostEntity = {
    id?: number
    uuid: string
    title: string;
    content: string;
    category: {
        name: string;
    };
    tags: {
        name: string;
    }[];
    createdAt: Date
    updatedAt: Date
}

export type PostResponse = {
    uuid: string
    title: string;
    content: string;
    category: string;
    tags: string[];
    createdAt: Date
    updatedAt: Date
}