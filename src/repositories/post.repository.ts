import { prisma } from "../database";
import { CreateOrUpdatePostData } from "../types/create-or-update-post-data.type";

export const findAllPosts = async (term: string | undefined) => {
  return await prisma.post.findMany({
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

export const findPostById = async (id: number) => {
  return await prisma.post.findFirst({
    where: { id },
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

export const createPost = async (payload: CreateOrUpdatePostData) => {
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
      categoryId: true,
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

export const updatePost = async (id: number, payload: CreateOrUpdatePostData) => {
  return await prisma.post.update({
    where: { id },
    data: {
      title: payload.title,
      content: payload.content,
      categoryId: payload.categoryId,
      tags: {
          set: payload.tagIds.map((id: number) => ({ id })),
        }
    },
    omit: {
      categoryId: true,
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