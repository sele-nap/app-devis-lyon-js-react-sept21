import base from "../../../middleware/commons";
import { deleteFiles } from "../../../models/attachedFiles";

async function deleteAttachedFiles({ query: { id } }, res) {
  if (await deleteFiles(id)) res.status(204).send();
  else res.status(404).send();
}

export default base().delete(deleteAttachedFiles);