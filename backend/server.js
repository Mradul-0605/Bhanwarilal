
require("dotenv").config();


const askGemini =require("./chatbot");

const jwt = require("jsonwebtoken");

const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});


app.use(cors());
app.use(express.json());

db.run(`
CREATE TABLE IF NOT EXISTS sweets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  original_price INTEGER,
  current_price INTEGER,
  mode TEXT,
  image TEXT
)
`);

db.run(`
CREATE TABLE IF NOT EXISTS namkeen (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  original_price INTEGER,
  current_price INTEGER,
  mode TEXT,
  image TEXT
)
`);

db.run(`
CREATE TABLE IF NOT EXISTS giftboxes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  original_price INTEGER,
  current_price INTEGER,
  mode TEXT,
  image TEXT
)
`);

db.run(
  `ALTER TABLE sweets ADD COLUMN image TEXT`,
  (err) => {}
);

db.run(
  `ALTER TABLE sweets ADD COLUMN description TEXT`,
  () => {}
);

db.run(
  `ALTER TABLE namkeen ADD COLUMN description TEXT`,
  () => {}
);

db.run(
  `ALTER TABLE giftboxes ADD COLUMN description TEXT`,
  () => {}
);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/sweets", (req, res) => {
  db.all(
    "SELECT * FROM sweets",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(rows);
    }
  );
});

app.get("/namkeen", (req, res) => {
  db.all(
    "SELECT * FROM namkeen",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(rows);
    }
  );
});

app.get("/giftboxes", (req, res) => {
  db.all(
    "SELECT * FROM giftboxes",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(rows);
    }
  );
});

app.post("/sweets", (req, res) => {
  const { name, price, image, description } = req.body;

  db.run(
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
    (?, ?, ?, ?, ?, ?)
    `,
    [
      name,
      price,
      price,
      "price",
      image,
      description ||  ""
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
});

app.post("/namkeen", (req, res) => {
  const { name, price, image, description } = req.body;

  db.run(
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
    (?, ?, ?, ?, ?, ?)
    `,
    [
      name,
      price,
      price,
      "price",
      image,
      description || ""
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
});


app.post("/giftboxes", (req, res) => {
  const { name, price, image, description } = req.body;

  db.run(
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
    (?, ?, ?, ?, ?, ?)
    `,
    [
      name,
      price,
      price,
      "price",
      image,
      description || ""
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
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


app.put("/sweets/:id", (req, res) => {
  const {
  current_price,
  mode,
  image,
  description
} = req.body;

  let query;
  let values;

  if (mode === "price") {

    query = `
      UPDATE sweets
      SET
        original_price = ?,
        current_price = ?,
        mode = ?,
        image = ?,
        description = ?
      WHERE id = ?
    `;

    values = [
      current_price,
      current_price,
      mode,
      image,
      description,
      req.params.id
    ];

  } else {

    query = `
      UPDATE sweets
      SET
        current_price = ?,
        mode = ?,
        image = ?,
        description = ?
      WHERE id = ?
    `;

    values = [
      current_price,
      mode,
      image,
      description,
      req.params.id
    ];
  }

  db.run(
    query,
    values,
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
});

app.put("/namkeen/:id", (req, res) => {
  const {
  current_price,
  mode,
  image,
  description
} = req.body;

  let query;
  let values;

  if (mode === "price") {

    query = `
      UPDATE namkeen
      SET
        original_price = ?,
        current_price = ?,
        mode = ?,
        image = ?,
        description = ?
      WHERE id = ?
    `;

    values = [
      current_price,
      current_price,
      mode,
      image,
      description,
      req.params.id
    ];

  } else {

    query = `
      UPDATE namkeen
      SET
        current_price = ?,
        mode = ?,
        image = ?,
        description = ?
      WHERE id = ?
    `;

    values = [
      current_price,
      mode,
      image,
      description,
      req.params.id
    ];
  }

  db.run(
    query,
    values,
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
});

app.put("/giftboxes/:id", (req, res) => {
  const {
  current_price,
  mode,
  image,
  description
} = req.body;

  let query;
  let values;

  if (mode === "price") {

    query = `
      UPDATE giftboxes
      SET
        original_price = ?,
        current_price = ?,
        mode = ?,
        image = ?,
        description = ?
      WHERE id = ?
    `;

    values = [
      current_price,
      current_price,
      mode,
      image,
      description,
      req.params.id
    ];

  } else {

    query = `
      UPDATE giftboxes
      SET
        current_price = ?,
        mode = ?,
        image = ?,
        description = ?
      WHERE id = ?
    `;

    values = [
      current_price,
      mode,
      image,
      description,
      req.params.id
    ];
  }

  db.run(
    query,
    values,
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
});

app.delete("/sweets/:id", (req, res) => {
  db.run(
    `
    DELETE FROM sweets
    WHERE id = ?
    `,
    [req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
});

app.delete("/namkeen/:id", (req, res) => {
  db.run(
    `
    DELETE FROM namkeen
    WHERE id = ?
    `,
    [req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
});

app.delete("/giftboxes/:id", (req, res) => {
  db.run(
    `
    DELETE FROM giftboxes
    WHERE id = ?
    `,
    [req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true
      });
    }
  );
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

app.get("/fix-images", (req, res) => {

  db.run(`
    UPDATE sweets
    SET image = LOWER(name) || '.png'
    WHERE image IS NULL
  `);

  res.send("Images Fixed");

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