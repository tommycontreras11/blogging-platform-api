import { UpdateTagDTO } from '../../dtos/tag/update-tag.dto';
import { StatusCode } from '../../helpers/status-code';
import { findTagByName, updateTag } from '../../repositories/tag.repository';
import { getTagByIdService } from './get-tag-by-id.service';

export const updateTagService = async (
  id: number,
  payload: UpdateTagDTO,
) => {
  const findTag = await getTagByIdService(id);
  
  const existsTag = await findTagByName(payload.name!)
  if(existsTag && existsTag.id != id) return Promise.reject({ message: "Already exists a tag with the name", status: StatusCode.CONFLICT })  
  
  return await updateTag(findTag.id, payload)
};
