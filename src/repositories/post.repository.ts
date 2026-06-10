import { prisma } from "../database";
import { CreatePostData } from "../types/create-post-data.type";
import { UpdatePostData } from "../types/update-post-data.type";

export const findAllPosts = async (term: string | undefined) => {
  return await prisma.post.findMany({
    omit: {
      id: true,
      categoryId: true,
      deletedAt: true,
    },
    include: {
      category: {
        select: { name: true }
      },
      tags: {
        select: { name: true }
      }
    },
    ...(term && {
      where: {
        OR: [
          // FULL-TEXT SEARCH (Postgres)
          {
            title: {
              search: term
            }
          },
          {
            content: { 
              search: term
            }
          },
          // RELATIONAL FIELDS (fallback)
          {
            category: {
              name: { contains: term, mode: "insensitive" }
            }
          }
        ]
      }
    })
  });
}

export const findPostByUuid = async (uuid: string) => {
  return await prisma.post.findFirst({
    where: { uuid },
    include: {
      category: {
        select: { name: true }
      },
      tags: {
        select: { name: true }
      }
    }
  });
};

export const createPost = async (payload: CreatePostData) => {
  return await prisma.post.create({
    data: {
      title: payload.title,
      content: payload.content,
      categoryId: payload.categoryId,
      tags: {
        connect: payload.tagIds.map((id: number) => ({ id }))
      }
    },
    omit: {
      id: true,
      categoryId: true,
      deletedAt: true,
    },
    include: {
      category: {
        select: { name: true }
      },
      tags: {
        select: { name: true }
      }
    }
  });
}

export const deletePostById = async (id: number) => {
  return await prisma.post.delete({
      where: { id }
  })
}

export const updatePost = async (id: number, payload: UpdatePostData) => {
  return await prisma.post.update({
    where: { id },
    data: {
      ...(payload.title && { title: payload.title }),
      ...(payload.content && { content: payload.content }),
      ...(payload.categoryId && { categoryId: payload.categoryId }),
      ...(payload.tagIds && payload.tagIds.length > 0 && {
        tags: {
          set: payload.tagIds.map((id: number) => ({ id })),
        },
      }),
    },
    omit: {
      id: true,
      categoryId: true,
      deletedAt: true,
    },
    include: {
      category: {
        select: { name: true }
      },
      tags: {
        select: { name: true }
      }
    }
  });
}