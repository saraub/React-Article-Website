import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();

app.use(bodyParser.json());

async function withdb(operations, res) {
  try {
    const MongoClient = require("mongodb").MongoClient;
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });
    const db = client.db("blog");
    await operations(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to database", error });
  }
}
app.get("/api/articles/:name", async (req, res) => {
  withdb(async (db) => {
    const articlesName = req.params.name;

    const articlesInfo = await db
      .collection("articles")
      .findOne({ name: articlesName });
    res.status(200).json(articlesInfo);
  }, res);
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  withdb(async (db) => {
    const articlesName = req.params.name;

    const articlesInfo = await db
      .collection("articles")
      .findOne({ name: articlesName });
    await db.collection("articles").updateOne(
      { name: articlesName },
      {
        $set: {
          upvotes: articlesInfo.upvotes + 1,
        },
      }
    );
    const updatearticleinfo = await db
      .collection("articles")
      .findOne({ name: articlesName });

    res.status(200).json(updatearticleinfo);
  }, res);
});

app.post("/api/articles/:name/addcomment", async (req, res) => {
  withdb(async (db) => {
    const articlesName = req.params.name;
    const { Username, Text } = req.body;
    const articlesInfo = await db
      .collection("articles")
      .findOne({ name: articlesName });
    await db.collection("articles").updateOne(
      {
        name: articlesName,
      },
      {
        $set: {
          comments: articlesInfo.comments.concat({ Username, Text }),
        },
      }
    );
    const updatearticleinf = await db
      .collection("articles")
      .findOne({ name: articlesName });

    res.status(200).json(updatearticleinf);
  }, res);
});

app.listen(8000, () => console.log("Listening on port 8000"));
