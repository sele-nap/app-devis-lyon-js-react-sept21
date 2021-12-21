const db = require("../db");
const Joi = require("joi");

const format = require("@joi/date");

const ValidateEstimate = (data, forUpdate = false) => {
  return Joi.object({
    additionalInformation: Joi.string().presence(
      forUpdate ? "optional" : "required"
    ),
    deadLine: Joi.date()
      // .format(["YYYY-MM-DD", "DD-MM-YYYY"])
      .presence(forUpdate ? "optional" : "required"),
    customer: Joi.string(),
    // attachedFiles: Joi.string().presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;
};

const createAskEstimate = async ({
  additionalInformation,
  deadLine,
  // attachedFiles,
  customer,
}) => {
  return await db.estimate.create({
    data: {
      deadLine: new Date(deadLine),
      additionalInformation,
      createDate: new Date(Date.now()),
      customer,
    },
  });
};

const updateAskEstimate = async (
  additionalInformation,
  deadLine,
  attachedFiles
) => {
  return db.estimate
    .patch({ where: { additionalInformation, deadLine, attachedFiles } })
    .catch(() => false);
};

module.exports = { ValidateEstimate, createAskEstimate, updateAskEstimate };
