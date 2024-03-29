const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(
	cors({
		origin: "http://localhost:3000https://mathis-portfolio.vercel.app/",
	})
);

app.post("/api/contact", (req, res) => {
	const { name, email, message } = req.body;

	console.log("Name:", name);
	console.log("Email:", email);
	console.log("Message:", message);

	res.status(200).send("Message received successfully!");
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
