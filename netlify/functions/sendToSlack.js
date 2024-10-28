const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { name, email, phone, message } = JSON.parse(event.body);

  const payload = {
    text: `
        New Contact Form Submission:\n
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone || "N/A"}\n
        Message: ${message}
    `,
  };

  try {
    const response = await fetch(process.env.SLACK_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to submit form to Slack" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form successfully submitted to Slack" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error submitting form" }),
    };
  }
};
