import { prisma } from '../../database';
import { UpdateTagDTO } from '../../dtos/tag/update-tag.dto';
import { StatusCode } from '../../helpers/status-code';
import { getOneTagService, getTagByName } from './getOne.service';

export const updateTagService = async (
  uuid: string,
  { name }: UpdateTagDTO,
) => {
  const findTag = await getOneTagService(uuid);
  
  let existsTag = await getTagByName(name!)
  if(existsTag && existsTag.uuid != uuid) return Promise.reject({ message: "Already exists a tag with the name", status: StatusCode.CONFLICT })  
  
  const tag = await prisma.tag.update({
    where: { id: findTag.id },
    data: {
      ...(name && { name }),
    },
  });

  return tag;
};
