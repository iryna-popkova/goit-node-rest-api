const path = require("path");
const fs = require("fs/promises");
const { User } = require("../models/user");
const Jimp = require("jimp");

avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;

  const image = await Jimp.read(tempUpload);
  image.resize(250, 250);

  const resultUpload = path.join(avatarsDir, filename);
  await image.writeAsync(resultUpload);
  await fs.unlink(tempUpload);

  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, { avatarURL });
  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;
