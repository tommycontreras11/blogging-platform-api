import { UpdateTagDTO } from '../../dtos/tag/update-tag.dto';
import { StatusCode } from '../../helpers/status-code';
import { findTagByName, updateTag } from '../../repositories/tag.repository';
import { getTagByUuidService } from './get-tag-by-uuid.service';

export const updateTagService = async (
  uuid: string,
  payload: UpdateTagDTO,
) => {
  const findTag = await getTagByUuidService(uuid);
  
  let existsTag = await findTagByName(payload.name!)
  if(existsTag && existsTag.uuid != uuid) return Promise.reject({ message: "Already exists a tag with the name", status: StatusCode.CONFLICT })  
  
  return await updateTag(findTag.id, payload)
};
