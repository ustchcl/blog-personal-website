export type Article = {
    id: number;
    title: string;
    description: string;
    cover: string;
    markdownPath: string;
    tagList: Array<string>;
}