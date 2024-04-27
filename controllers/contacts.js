const { json } = require("express");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res) => {
    const result = await mongodb.getDb().db().collection("contacts").find();
    result.toArray().then(contacts => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts);
    })
}

const getContact = async (req, res) => {
    const userId = ObjectId.createFromHexString(req.params.id);
    const result = await mongodb.getDb().db().collection("contacts").find({_id: userId});
    result.toArray().then(contacts => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts[0]);
    })
}

module.exports = {
    getAllContacts,
    getContact
}