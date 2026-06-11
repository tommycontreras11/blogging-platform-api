export type CreateOrUpdatePostData = {
  title: string;
  content: string;
  categoryId: number;
  tagIds: number[]
};