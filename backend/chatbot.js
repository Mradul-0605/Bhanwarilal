const { InferenceClient } =
require("@huggingface/inference");

const Fuse =
require("fuse.js");

const knowledge =
require("./botKnowledge");

const db =
require("./database");

const client =
new InferenceClient(
  process.env.HF_TOKEN
);

let chatHistory = [];

function query(sql, params = []) {

  return new Promise(
    (resolve, reject) => {

      db.all(
        sql,
        params,
        (err, rows) => {

          if (err)
            reject(err);
          else
            resolve(rows);

        }
      );

    }
  );

}

async function askGemini(message) {

  try {

    const lowerMessage =
        message.toLowerCase();

      const matchedRule =
        knowledge.find(item =>
          item.keywords.some(keyword =>
            lowerMessage.includes(
              keyword.toLowerCase()
            )
          )
        );

        if (matchedRule) {

  const response =
    await client.chatCompletion({

      model:
        "Qwen/Qwen2.5-7B-Instruct",

      messages: [

        {
          role: "system",

          content: `
You are Bhanwarilal AI Assistant.

Use the provided business information.

Never change the facts.

Answer naturally and conversationally.
`
        },

        {
          role: "user",

          content: `
Customer Question:

${message}

Business Information:

${matchedRule.response}

Answer naturally.
`
        }

      ],

      max_tokens: 200

    });

  return response
    .choices[0]
    .message.content;
}

    const sweets =
      await query(
        "SELECT * FROM sweets"
      );

    const namkeen =
      await query(
        "SELECT * FROM namkeen"
      );

    const gifts =
      await query(
        "SELECT * FROM giftboxes"
      );

    const products = [

      ...sweets.map(
        (item) => ({
          ...item,
          category: "Sweet"
        })
      ),

      ...namkeen.map(
        (item) => ({
          ...item,
          category: "Namkeen"
        })
      ),

      ...gifts.map(
        (item) => ({
          ...item,
          category: "Gift Box"
        })
      )

    ];

    const fuse =
      new Fuse(products, {
        keys: ["name"],
        threshold: 0.4
      });

    const matches =
      fuse.search(message);

    const relevantProducts =
      matches
        .slice(0, 5)
        .map(
          (item) =>
            item.item
        );

    let context;

    if (
      relevantProducts.length > 0
    ) {

      context =
        JSON.stringify(
          relevantProducts,
          null,
          2
        );

    } else {

      context =
        `
No exact products found.

Available Products:

${products
  .slice(0, 20)
  .map(
    (p) =>
      `${p.category} - ${p.name} - ₹${p.current_price}`
  )
  .join("\n")}
`;

    }

    chatHistory.push({
      role: "user",
      content: message
    });

    chatHistory =
      chatHistory.slice(-6);

    const response =
      await client.chatCompletion({

        model:
          "Qwen/Qwen2.5-7B-Instruct",

        messages: [

          {
            role: "system",
            content: `
You are Bhanwarilal Sweet Shop AI Assistant.

You can chat normally.

If business information is provided,
always use that information as the source of truth.

Do not invent phone numbers,
addresses, timings or delivery policies.

Answer naturally and conversationally.

You help customers choose sweets,
namkeen and gift boxes.

Use the product data whenever relevant.

If a product is unavailable,
say it is not available.

Keep answers short and friendly.
`
          },

          ...chatHistory,

          {
            role: "user",
            content: `
PRODUCT DATA:

${context}

CUSTOMER QUESTION:

${message}
`
          }

        ],

        max_tokens: 300

      });

    const answer =
      response
        .choices[0]
        .message.content;

    chatHistory.push({
      role: "assistant",
      content: answer
    });

    chatHistory =
      chatHistory.slice(-6);

    return answer;

  } catch (error) {

    console.error(error);

    return "Sorry, I am unable to answer right now.";

  }

}

module.exports =
askGemini;