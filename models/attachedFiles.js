const db = require("../db");

const createFile = async ({ name, estimate, url }) => {
  return await db.attachedFile.create({
    data: {
      name,
      estimate,
      url,
    },
  });
};

const deleteFile = async (id) => {
  return await db.attachedFile
    .delete({ where: { id: parseInt(id, 10) } })
    .catch((_) => false);
};

module.exports = {
  createFile,
  deleteFile,
};
