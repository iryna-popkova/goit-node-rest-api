const getAllContacts = require("./getAllContacts");
const getOneContact = require("./getOneContact");
const createContact = require("./createContact");
const updateContact = require("./updateContact ");
const deleteContact = require("./deleteContact");
const updateFavorite = require("./updateFavorite ");
const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  verifyEmail,
  resendVerifyEmail,
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
  updateFavorite,
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
};
