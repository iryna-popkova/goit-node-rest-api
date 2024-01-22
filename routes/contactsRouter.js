import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import validateBody from "../midleware/validateBody.js";
import { createContactSchema } from "../schemas/contactsSchemas.js";

const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} = contactsControllers;

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", validateBody(createContactSchema), updateContact);

export default contactsRouter;
