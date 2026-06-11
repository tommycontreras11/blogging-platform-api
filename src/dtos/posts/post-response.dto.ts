export type PostEntity = {
    id: number
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
    id: number
    title: string;
    content: string;
    category: string;
    tags: string[];
    createdAt: Date
    updatedAt: Date
}