import { Coment } from '../db/models';

async function userCheck(req, res, next) {
  const { id } = req.params;
  const currComment = await Coment.findByPk(id);
  if (currComment.user_Admin === true) return res.sendStatus(401);
  return next();
}
export default userCheck;