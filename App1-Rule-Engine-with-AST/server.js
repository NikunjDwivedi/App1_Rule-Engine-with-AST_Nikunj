const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
// const { createRuleAST } = require("./ruleEngine");
const ruleRoutes = require("./routes/ruleRoutes");

const app = express();
// const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://nikunjdwivedi:nikunj12345@nikunjdwivedi.y8new.mongodb.net/?retryWrites=true&w=majority&appName=NikunjDwivedi",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route for serving the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

// Use ruleRoutes for "/api/rules"
app.use("/api/rules", ruleRoutes);

// // Route to create a rule (should be handled in ruleRoutes)
// app.post("/api/rules/create_rule", (req, res) => {
//   const { ruleString, ruleName } = req.body;

//   // Validate the input
//   if (!ruleString || !ruleName) {
//     return res
//       .status(400)
//       .json({ message: "ruleString and ruleName are required" });
//   }

//   try {
//     // Create AST from rule string
//     const ruleAST = createRuleAST(ruleString);

//     // Simulate saving the rule to the database (use actual MongoDB later)
//     const rule = {
//       rule_name: ruleName,
//       rule_ast: ruleAST,
//     };

//     // Respond with the rule object (later you will save this to MongoDB)
//     res.status(200).json(rule);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating rule", error: error.message });
//   }
// });

// Start the server
const PORT = process.env.PORT || 10000; // Use environment variable or default to 10000
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const { createRuleAST } = require("./ruleEngine");
// const ruleRoutes = require("./routes/ruleRoutes");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static("public"));

// mongoose
//   .connect(
//     "mongodb+srv://nikunjdwivedi:nikunj12345@nikunjdwivedi.y8new.mongodb.net/?retryWrites=true&w=majority&appName=NikunjDwivedi",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB", err);
//   });

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, "public")));

// // Route for serving the index.html
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/index.html"));
// });
// app.use("/api/rules", ruleRoutes);

// // Route to create a rule
// app.post("/api/rules/create_rule", (req, res) => {
//   const { ruleString, ruleName } = req.body;

//   // Validate the input
//   if (!ruleString || !ruleName) {
//     return res
//       .status(400)
//       .json({ message: "ruleString and ruleName are required" });
//   }

//   try {
//     // Create AST from rule string
//     const ruleAST = createRuleAST(ruleString);

//     // Simulate saving the rule to the database (use actual MongoDB later)
//     const rule = {
//       rule_name: ruleName,
//       rule_ast: ruleAST,
//     };

//     // Respond with the rule object (later you will save this to MongoDB)
//     res.status(200).json(rule);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating rule", error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
