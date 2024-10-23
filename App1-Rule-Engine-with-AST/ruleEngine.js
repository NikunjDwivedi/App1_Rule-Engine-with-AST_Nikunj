const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://nikunjdwivedi:nikunj12345@nikunjdwivedi.y8new.mongodb.net/?retryWrites=true&w=majority&appName=NikunjDwivedi'


// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

    const ruleSchema = new mongoose.Schema({
      rule_name: { type: String, required: true, unique: true }, 
      rule_ast: { type: Object, required: true },
  });
  


const Rule = mongoose.model('Rule', ruleSchema);


// This function creates an AST from a rule string
async function createRuleAST(ruleString) {
  try {
  
      // Basic validation for ruleString
      if (!ruleString || typeof ruleString !== 'string') {
        throw new Error("Invalid rule string provided.");
    }

      // Basic implementation to convert ruleString to AST
      // You can build more complex parsing logic based on the rule structure

      // This is a simplified example (you should implement your own parser)
      const ast = {
          type: "operator",
          value: "AND", // For example
          left: {
              type: "operand",
              value: "age > 30",
          },
          right: {
              type: "operator",
              value: "OR",
              left: {
                  type: "operand",
                  value: 'department = "Sales"',
              },
              right: {
                  type: "operand",
                  value: "salary > 50000",
              },
          },
      };

      // Creating a meaningful name based on ruleString (example)
      const ruleName = `Rule_Age_GreaterThan30_Department_Sales_Salary_Above50000`;

      // Save the AST to MongoDB with a meaningful name
      const newRule = new Rule({
          rule_name: ruleName,
          rule_ast: ast,
      });

      await newRule.save();
      console.log("Rule saved successfully:", newRule);

      return ast;

  } catch (error) {
      // Log the error for debugging
      console.error("Error creating AST:", error);
      // Throw a custom error to indicate failure
      throw new Error("Failed to create rule AST. Please check your rule syntax.");
  }
}

module.exports = { createRuleAST };


// // This function creates an AST from a rule string
// // This function creates an AST from a rule string
// function createRuleAST(ruleString) {
//   // Basic implementation to convert ruleString to AST
//   // You can build more complex parsing logic based on the rule structure

//   // This is a simplified example (you should implement your own parser)
//   const ast = {
//     type: "operator",
//     value: "AND", // For example
//     left: {
//       type: "operand",
//       value: "age > 30",
//     },
//     right: {
//       type: "operator",
//       value: "OR",
//       left: {
//         type: "operand",
//         value: 'department = "Sales"',
//       },
//       right: {
//         type: "operand",
//         value: "salary > 50000",
//       },
//     },
//   };

//   return ast;
// }

// module.exports = { createRuleAST };
