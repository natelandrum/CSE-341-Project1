const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .find();
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts);
  });
};

const getContact = async (req, res) => {
  const userId = ObjectId.createFromHexString(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts[0]);
  });
};

const createContact = async (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .insertOne(user);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || { message: "Failed to create contact" });
  }
};

const updateContact = async (req, res) => {
  const userId = ObjectId.createFromHexString(req.params.id);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .replaceOne({ _id: userId }, user);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json({ message: "Failed to update contact" });
  }
};

const deleteContact = async (req, res) => {
  const userId = ObjectId.createFromHexString(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .deleteOne({ _id: userId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json({ message: "Failed to delete contact" });
  }
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
