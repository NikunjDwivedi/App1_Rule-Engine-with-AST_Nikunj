# Rule Engine with AST
Hosted link: https://rule-engine-with-ast-nikunj-dwivedi-m0io.onrender.com

## Overview

The application is a simple 3-tier rule engine application (Simple UI, API and Backend, Data) which determines user eligibility based on attributes like age, department, income, spend etc. Abstract Syntax Tree (AST) is used to represent conditional rules and allow for dynamic creation, combination, and modification of these rules.


![Screenshot (86)](https://github.com/user-attachments/assets/f244252d-6f7d-4435-af8b-c7f7f44d4178)


## Features

- **Create Rules:** Define rules using a string format that gets converted into an AST.
  
![Screenshot (84)](https://github.com/user-attachments/assets/62c5ba89-cd29-42ae-8ff5-89e580633ba9)


- **Combine Rules:** Combine multiple rules into a single AST for more complex evaluations.
  
![Screenshot (89)](https://github.com/user-attachments/assets/3a85c5f2-93f7-4590-aae5-fedd01e09fc5)


- **Evaluate Rules:** Check if the given data meets the criteria defined by the AST.
  
![Screenshot (90)](https://github.com/user-attachments/assets/a3cc3a24-dbcc-47ce-84bb-fd1b0f1b2efd)



- **Tree Visualization:** Define or Combine Rule would should show Tree Representation.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** JavaScript, CSS, HTML
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the Repository**
   ```bash
   git clone "https://github.com/NikunjDwivedi/App1_Rule-Engine-with-AST_Nikunj.git"
   cd App1-Rule-Engine-with-AST
   ```

2. **Install Backend Dependencies**

   ```bash
   npm install
   ```
   
3. **Start MongoDB**

   Ensure that MongoDB is running on your local machine:

   ```bash
   mongod
   ```

4. **Start the Backend Server**

   ```bash
   node server.js
   ```
   or
    ```bash
   npm start
   ```

## API Endpoints

1. **Create a Rule**
   - **Endpoint:** `/api/create_rule`
   - **Method:** POST
   - **Body:**

     ```json
     {
       "ruleString": "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)",
       "ruleName": "Rule 1"
     }
     ```
use appropriate spaces in Rules for correct results.

Rule should be in follow format:
variable operator value 

   - **Response:**

     ```json
     {
       "_id": "605c72ef1f4e3a001f4d2e9a",
       "rule_name": "Rule1",
       "rule_ast": { ... }
     }
     ```

2. **Combine Rules**
   - **Endpoint:** `/api/rules/combine_rules`
   - **Method:** POST
   - **Body:**

     ```json
     {
       "ruleIds": ["605c72ef1f4e3a001f4d2e9a", "605c730f1f4e3a001f4d2e9b"]
       "operators: op
     }
     ```
   - **Response:**

     ```json
     {
       "type": "operator",
       "value": operator,
       "left": { ... },
       "right": { ... }
     }
     ```

3. **Evaluate a Rule**
   - **Endpoint:** `/api/rules/evaluate_rule`
   - **Method:** POST
   - **Body:**

     ```json
     {
       "rule": { ... },
       "data": {
         "age": 35,
         "department": "Sales",
         "salary": 60000,
         "experience": 3
       }
     }
     ```
   - **Response:**

     ```json
     {
       "result": true
     }
     ```

## Running Tests

You can add and run tests to ensure everything is working correctly. 
```
created bt: Nikunj Dwivedi
