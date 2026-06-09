
require("dotenv").config();


const askGemini =require("./chatbot");

const jwt = require("jsonwebtoken");

const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("MAIL ERROR:", error);
  } else {
    console.log("MAIL SERVER READY");
  }
});


app.use(cors());
app.use(express.json());

(async () => {

  await db.query(`
    CREATE TABLE IF NOT EXISTS sweets (
      id SERIAL PRIMARY KEY,
      name TEXT,
      original_price INTEGER,
      current_price INTEGER,
      mode TEXT,
      image TEXT,
      description TEXT
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS namkeen (
      id SERIAL PRIMARY KEY,
      name TEXT,
      original_price INTEGER,
      current_price INTEGER,
      mode TEXT,
      image TEXT,
      description TEXT
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS giftboxes (
      id SERIAL PRIMARY KEY,
      name TEXT,
      original_price INTEGER,
      current_price INTEGER,
      mode TEXT,
      image TEXT,
      description TEXT
    )
  `);

  console.log("Tables Ready");

})();

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/sweets", async (req, res) => {

  try {

    const result =
      await db.query(
        "SELECT * FROM sweets"
      );

    res.json(result.rows);

  } catch (error) {

    res.status(500).json(error);

  }

});

app.get("/namkeen", async (req, res) => {

  try {

    const result =
      await db.query(
        "SELECT * FROM namkeen"
      );

    res.json(result.rows);

  } catch (error) {

    res.status(500).json(error);

  }

});

app.get("/giftboxes", async (req, res) => {

  try {

    const result =
      await db.query(
        "SELECT * FROM giftboxes"
      );

    res.json(result.rows);

  } catch (error) {

    res.status(500).json(error);

  }

});

app.post("/sweets", async (req, res) => {

  try {

    const {
      name,
      price,
      image,
      description
    } = req.body;

    await db.query(
      `
      INSERT INTO sweets
      (
        name,
        original_price,
        current_price,
        mode,
        image,
        description
      )
      VALUES
      ($1, $2, $3, $4, $5, $6)
      `,
      [
        name,
        price,
        price,
        "price",
        image,
        description || ""
      ]
    );

    res.json({
      success: true
    });

  } catch (error) {

    console.error(error);

    res.status(500).json(error);

  }

});

app.post("/namkeen", async (req, res) => {

  try {

    const {
      name,
      price,
      image,
      description
    } = req.body;

    await db.query(
      `
      INSERT INTO namkeen
      (
        name,
        original_price,
        current_price,
        mode,
        image,
        description
      )
      VALUES
      ($1,$2,$3,$4,$5,$6)
      `,
      [
        name,
        price,
        price,
        "price",
        image,
        description || ""
      ]
    );

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json(error);

  }

});


app.post("/giftboxes", async (req, res) => {

  try {

    const {
      name,
      price,
      image,
      description
    } = req.body;

    await db.query(
      `
      INSERT INTO giftboxes
      (
        name,
        original_price,
        current_price,
        mode,
        image,
        description
      )
      VALUES
      ($1,$2,$3,$4,$5,$6)
      `,
      [
        name,
        price,
        price,
        "price",
        image,
        description || ""
      ]
    );

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

app.post("/contact", async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      message
    } = req.body;

    await transporter.sendMail({

      from: process.env.GMAIL_USER,

      to: ["bhanwarilalmithaiwala@gmail.com","bhanwarilal.contact@gmail.com"],

      replyTo: email,

      subject: "New Contact Form - Bhanwarilal",

      html: `
        <h2>New Contact Form</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Phone:</strong>
          ${phone}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Message:</strong>
          ${message}
        </p>
      `
    });

    res.json({
      success: true
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false
    });

  }

});


app.put("/sweets/:id", async (req, res) => {

  try {

    const {
      current_price,
      mode,
      image,
      description
    } = req.body;

    if (mode === "price") {

      await db.query(
        `
        UPDATE sweets
        SET
          original_price = $1,
          current_price = $2,
          mode = $3,
          image = $4,
          description = $5
        WHERE id = $6
        `,
        [
          current_price,
          current_price,
          mode,
          image,
          description,
          req.params.id
        ]
      );

    } else {

      await db.query(
        `
        UPDATE sweets
        SET
          current_price = $1,
          mode = $2,
          image = $3,
          description = $4
        WHERE id = $5
        `,
        [
          current_price,
          mode,
          image,
          description,
          req.params.id
        ]
      );

    }

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

app.put("/namkeen/:id", async (req, res) => {

  try {

    const {
      current_price,
      mode,
      image,
      description
    } = req.body;

    if (mode === "price") {

      await db.query(
        `
        UPDATE namkeen
        SET
          original_price = $1,
          current_price = $2,
          mode = $3,
          image = $4,
          description = $5
        WHERE id = $6
        `,
        [
          current_price,
          current_price,
          mode,
          image,
          description,
          req.params.id
        ]
      );

    } else {

      await db.query(
        `
        UPDATE namkeen
        SET
          current_price = $1,
          mode = $2,
          image = $3,
          description = $4
        WHERE id = $5
        `,
        [
          current_price,
          mode,
          image,
          description,
          req.params.id
        ]
      );

    }

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

app.put("/giftboxes/:id", async (req, res) => {

  try {

    const {
      current_price,
      mode,
      image,
      description
    } = req.body;

    if (mode === "price") {

      await db.query(
        `
        UPDATE giftboxes
        SET
          original_price = $1,
          current_price = $2,
          mode = $3,
          image = $4,
          description = $5
        WHERE id = $6
        `,
        [
          current_price,
          current_price,
          mode,
          image,
          description,
          req.params.id
        ]
      );

    } else {

      await db.query(
        `
        UPDATE giftboxes
        SET
          current_price = $1,
          mode = $2,
          image = $3,
          description = $4
        WHERE id = $5
        `,
        [
          current_price,
          mode,
          image,
          description,
          req.params.id
        ]
      );

    }

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

app.delete("/sweets/:id", async (req, res) => {

  try {

    await db.query(
      "DELETE FROM sweets WHERE id = $1",
      [req.params.id]
    );

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

app.delete("/namkeen/:id", async (req, res) => {

  try {

    await db.query(
      "DELETE FROM namkeen WHERE id = $1",
      [req.params.id]
    );

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json(error);

  }

});

app.delete("/giftboxes/:id", async (req, res) => {

  try {

    await db.query(
      "DELETE FROM giftboxes WHERE id = $1",
      [req.params.id]
    );

    res.json({
      success: true
    });

  } catch (error) {

    res.status(500).json(error);

  }

});
app.post("/login", (req, res) => {

  const { password } = req.body;

  if (
    password === process.env.ADMIN_PASSWORD
  ) {

    const token = jwt.sign(
      {
        admin: true
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    return res.json({
      success: true,
      token
    });

  }

  res.status(401).json({
    success: false,
    message: "Wrong Password"
  });

});

app.post("/chat", async (req, res) => {

  try {

    const { message } = req.body;

    const reply =
      await askGemini(message);

    res.json({
      reply
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      reply:
        "Something went wrong"
    });

  }

});

app.get("/test-chat", async (req, res) => {

  const reply =
    await askGemini("Hello");

  res.send(reply);

});

app.get("/fix-images", async (req, res) => {

  try {

    await db.query(`
      UPDATE sweets
      SET image = LOWER(name) || '.png'
      WHERE image IS NULL
    `);

    res.send("Images Fixed");

  } catch (error) {

    res.status(500).send(error.message);

  }

});

app.get("/chat-test/:message", async (req, res) => {

  const reply =
    await askGemini(
      req.params.message
    );

  res.send(reply);

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});