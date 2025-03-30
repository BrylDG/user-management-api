<h1>User Management API</h1>

<h2>Project Overview</h2>

<h3>Objective</h3>
<p>The goal of this project is to build a REST API for managing users, enabling CRUD (Create, Read, Update, Delete) operations.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>Create User (Postrero)</strong> – Add users with firstname, lastname, middlename, email, and password (minimum 6 characters)</li>
  <li><strong>Read Users (Gorgonio)</strong> – Retrieve all users or a single user by id</li>
  <li><strong>Update User (Amaro)</strong> – Modify existing user details</li>
  <li><strong>Delete User (Alesna)</strong> – Remove users by id</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Backend:</strong> Node.js with TypeScript</li>
  <li><strong>Database:</strong> MySQL</li>
  <li><strong>ORM:</strong> TypeORM</li>
  <li><strong>API Framework: </strong>  Express.js</li>
  <li><strong>Validation:</strong> Joi (for request validation)</li>
  <li><strong>Security:</strong> Bcrypt (password hashing)</li>
  <li><strong>Testing:</strong> Thunder Client (VS Code extension)</li>
</ul>

<h2>Setup Instructions</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js (v16+)</li>
  <li>MySQL server running (or XAMPP)</li>
  <li>VS Code with Thunder Client extension</li>
</ul>

<h3>Installation</h3>
<ol>
  <li>Clone the repository:
    <pre>git clone https://github.com/BrylDG/user-management-api.git</pre>
  </li>
  <li>Install dependencies:
    <pre>npm install
npm install bcrypt joi
npm install --save-dev @types/bcrypt @types/joi</pre>
  </li>
</ol>

<h3>Database Configuration</h3>
<ol>
  <li>Ensure MySQL is running (or start XAMPP → Apache & MySQL).</li>
  <li>The database user_db will be auto-created if it doesn’t exist.</li>
  <li>Update database credentials in:
    <ul>
      <li><code>data-source.ts</code></li>
      <li><code>ormconfig.json</code>:
        <pre>{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "your_password", // Leave empty if no password
  "database": "user_db",
  "synchronize": true,
  "logging": false,
  "entities": ["src/entity/*.ts"]
}</pre>
      </li>
    </ul>
  </li>
  <li>Start the server:
    <pre>npm run dev</pre>
  </li>
</ol>

<h2>API Documentation</h2>
<p><strong>Base URL:</strong> <code>http://localhost:3000</code></p>

<h3>Endpoints</h3>

<h4>Create User</h4>
<ul>
  <li><strong>Method:</strong> POST</li>
  <li><strong>URL:</strong> <code>http://localhost:3000/users</code></li>
  <li><strong>Request Body(JSON):</strong>
    <pre>{
  "firstname": "John",
  "lastname": "Doe",
  "middlename": "M",
  "email": "johndoe@example.com",
  "password": "password123"
}</pre>
  </li>
</ul>

<h4>Get All Users</h4>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>URL:</strong>  <code>http://localhost:3000/users</code></li>
</ul>

<h4>Get User by ID</h4>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>URL:</strong>  <code>http://localhost:3000/users/1</code></li>
</ul>

<h4>Update User</h4>
<ul>
  <li><strong>Method:</strong> PUT</li>
  <li><strong>URL:</strong>  <code>http://localhost:3000/users/1</code></li>
  <li><strong>Request Body (JSON):</strong>
    <pre>{
  "firstname": "Updated",
  "lastname": "Name"
}</pre>
  </li>
</ul>

<h4>Delete User</h4>
<ul>
  <li><strong>Method:</strong> DELETE</li>
  <li><strong>URL:</strong> <code>http://localhost:3000/users/1</code></li>
</ul>

<h2>Testing with Thunder Client</h2>
<ol>
  <li>Open Thunder Client in VS Code (Ctrl+Shift+P → "Thunder Client: New Request")</li>
  <li>Set base URL to <code>http://localhost:3000</code></li>
  <li>Test endpoints using the examples above</li>
</ol>

<h2>Team Roles</h2>
<ul>
  <li><strong>Postrero:</strong> User creation (POST)</li>
  <li><strong>Gorgonio:</strong> User retrieval (GET)</li>
  <li><strong>Amaro:</strong> User updates (PUT)</li>
  <li><strong>Alesna:</strong> User deletion (DELETE)</li>
</ul>
