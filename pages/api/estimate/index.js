import base from "../../../middleware/commons";
import handleImageUpload from "../../../middleware/handleImageUpload";
import requireCurrentUser from "../../../middleware/requireCurrentUser";
import { createFile, deleteFile } from "../../../models/attachedFiles";
import {
  deleteOneEstimate,
  createAskEstimate,
  getEstimates,
  getEstimatesDesc,
  ValidateEstimate,
} from "../../../models/estimate";
import mailer from "../../../mailer";
import crypto from "crypto";

const handleGet = async (req, res) => {
  const customerId =
    req.currentUser.role === "admin" ? undefined : req.currentUser.id;
  const { statusList, limit, offset, orderBy } = req.query;
  const [items, totalCount] = await getEstimates({
    statusList,
    limit,
    offset,
    customerId,
    orderBy: {
      createDate: orderBy === "createDateAsc" ? "asc" : "desc",
    },
  });
  res.setHeader("x-total-count", totalCount);
  res.send(items);
};

async function handlePost(req, res) {
  const validationError = ValidateEstimate(req.body);
  console.log(validationError);
  if (validationError) return res.status(422).send(validationError);
  const validationCode = crypto.randomBytes(50).toString("hex");
  const newEstimate = await createAskEstimate({
    ...req.body,
    validationCode,
    customer: { connect: { id: req.currentUser.id } },
  });

  const mailBody = `Une nouvelle demande de devis a été enregistrée sur votre site. Rendez vous sur : ${process.env.HOST}/estimates pour apporter une réponse`;
  await mailer.sendMail({
    from: process.env.MAILER_FROM,
    to: "wilder.app.devis@gmail.com",
    subject: `Un nouveau devis est en attente de réponse`,
    text: mailBody,
    html: mailBody,
  });
  if (req?.files && req.files?.length) {
    const filesSave = req.files.map((file) =>
      createFile({
        name: file.filename,
        estimate: { connect: { id: newEstimate.id } },
        url: file.path.replace("public/", ""),
      })
    );
    await Promise.all(filesSave);
  }
  res.status(201).send(newEstimate);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default base()
  .post(
    requireCurrentUser,
    handleImageUpload.array("attachedFiles", 3),
    handlePost
  )
  .get(requireCurrentUser, handleGet);
