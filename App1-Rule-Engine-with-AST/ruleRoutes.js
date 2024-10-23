const express = require("express");
const router = express.Router();
const { createRuleAST } = require("../ruleEngine");

// Route to create a rule
router.post("/create_rule", async (req, res) => {
  const { ruleString, ruleName } = req.body;

  if (!ruleString || !ruleName) {
    return res.status(400).json({ message: "ruleString and ruleName are required" });
  }

  try {
    // Create the rule
    const ruleAST = await createRuleAST(ruleString);

    // Save the rule to the database
    const newRule = new Rule({
      rule_name: ruleName,
      rule_ast: ruleAST,
    });

    await newRule.save();
    res.status(200).json({ ruleName, ruleAST });
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error code
      res.status(409).json({ message: `Rule with name "${ruleName}" already exists` });
    } else {
      res.status(500).json({ message: "Error creating rule", error: error.message });
    }
  }
});

module.exports = router;
