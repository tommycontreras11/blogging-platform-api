# 📝 Personal Blogging Platform API

**Project URL:** https://roadmap.sh/projects/blogging-platform-api

A RESTful API for managing blog posts, categories, and tags built with **Node.js**, **TypeScript**, **Express**, **Prisma**, **PostgreSQL**, and **Redis**.

This project was developed as an implementation of the Personal Blogging Platform project from roadmap.sh, extending the original requirements with category and tag management, Redis caching, Docker support, and a layered architecture.

---

## 🚀 Features

### Blog Posts

* Create a new blog post
* Retrieve all blog posts
* Retrieve a single blog post
* Update a blog post
* Delete a blog post
* Filter blog posts by search term

### Categories

* Create categories
* Retrieve categories
* Retrieve a category by ID
* Update categories
* Delete categories

### Tags

* Create tags
* Retrieve tags
* Retrieve a tag by ID
* Update tags
* Delete tags

### Additional Features

* Request validation using Zod
* Redis caching for blog post retrieval
* PostgreSQL database using Prisma ORM
* Dockerized development environment
* Layered architecture
* TypeScript support
* Health check endpoint
* Proper error handling and HTTP status codes

---

## 🛠️ Technologies Used

* Node.js
* TypeScript
* Express.js
* Prisma ORM
* PostgreSQL
* Redis
* Docker
* Zod

---

## 🏗️ Architecture

The application follows a layered architecture pattern:

```text
Request
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
Database (PostgreSQL)
```

Redis is used as a caching layer to improve performance when retrieving blog posts by their identifier.

---

## 📂 Project Structure

```bash
blogging-platform-api/
├── src/
│   ├── controllers/     # Request handlers
│   ├── services/        # Business logic
│   ├── repositories/    # Database operations
│   ├── dtos/            # Request validation schemas
│   ├── routes/          # API routes
│   ├── middlewares/     # Custom middlewares
│   ├── cache/           # Redis cache layer
│   ├── database/        # Prisma and Redis configuration
│   ├── mappers/         # Response mapping
│   ├── config/          # Application configuration
│   ├── helpers/         # Utility functions and constants
│   └── types/           # Shared TypeScript types
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

NODE_ENV=dev

DATABASE_URL=your_postgresql_connection_string

REDIS_URL=redis://redis:6379

# Local development
# REDIS_URL=redis://localhost:6379
```

---

## 🐳 Docker Setup

### Start the Application

```bash
docker compose up -d
```

### Stop the Application

```bash
docker compose down
```

The API will be available at:

```text
http://localhost:3000
```

---

## ▶️ Local Development

### Install Dependencies

```bash
npm install
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Database Migrations

```bash
npx prisma migrate dev
```

### Start Development Server

```bash
npm run dev
```

---

## ❤️ Health Check

Verify that the API is running correctly:

### Request

```http
GET /health
```

### Response

```json
{
  "healthy": true
}
```

---

# 📝 Posts API

Base Route:

```text
/api/posts
```

---

## Create Post

### Request

```http
POST /api/posts
```

### Body

```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Node.js", "TypeScript"]
}
```

### Response

```json
{
  "id": "1",
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Node.js", "TypeScript"],
  "createdAt": "2026-06-15T12:00:00Z",
  "updatedAt": "2026-06-15T12:00:00Z"
}
```

### Status Code

```text
201 Created
```

---

## Get All Posts

### Request

```http
GET /api/posts
```

### Response

```json
[
  {
    "id": "1",
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Node.js", "TypeScript"]
  }
]
```

### Status Code

```text
200 OK
```

---

## Search Posts

Posts can be filtered using a search term.

### Request

```http
GET /api/posts?term=tech
```

The API performs a wildcard search against:

* Title
* Content
* Category

### Example

```http
GET /api/posts?term=node
```

---

## Get Post By ID

### Request

```http
GET /api/posts/:id
```

### Example

```http
GET /api/posts/1
```

### Response

```json
{
  "id": "1",
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Node.js", "TypeScript"]
}
```

### Status Code

```text
200 OK
```

---

## Redis Cache Strategy

When retrieving a post by its identifier:

1. The API checks Redis first.
2. If the post exists in cache, it is returned immediately.
3. If the post is not cached:

   * The API retrieves the post from PostgreSQL.
   * The post is stored in Redis.
   * The response is returned.

Benefits:

* Faster response times
* Reduced database load
* Better scalability

---

## Update Post

### Request

```http
PATCH /api/posts/:id
```

### Body

```json
{
  "title": "My Updated Blog Post"
}
```

### Response

```json
{
  "id": "1",
  "title": "My Updated Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Node.js", "TypeScript"],
  "updatedAt": "2026-06-15T12:30:00Z"
}
```

### Status Code

```text
200 OK
```

---

## Delete Post

### Request

```http
DELETE /api/posts/:id
```

### Status Code

```text
204 No Content
```

---

# 📂 Categories API

Base Route:

```text
/api/categories
```

---

## Get All Categories

```http
GET /api/categories
```

---

## Get Category By ID

```http
GET /api/categories/:id
```

---

## Create Category

### Request

```http
POST /api/categories
```

### Body

```json
{
  "name": "Technology"
}
```

---

## Update Category

### Request

```http
PATCH /api/categories/:id
```

### Body

```json
{
  "name": "Programming"
}
```

---

## Delete Category

### Request

```http
DELETE /api/categories/:id
```

---

# 🏷️ Tags API

Base Route:

```text
/api/tags
```

---

## Get All Tags

```http
GET /api/tags
```

---

## Get Tag By ID

```http
GET /api/tags/:id
```

---

## Create Tag

### Request

```http
POST /api/tags
```

### Body

```json
{
  "name": "Node.js"
}
```

---

## Update Tag

### Request

```http
PATCH /api/tags/:id
```

### Body

```json
{
  "name": "TypeScript"
}
```

---

## Delete Tag

### Request

```http
DELETE /api/tags/:id
```

---

## 🗄️ Data Model

### Category

```ts
{
  id: string;
  name: string;
}
```

### Tag

```ts
{
  id: string;
  name: string;
}
```

### Post

```ts
{
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

Relationships:

* A post belongs to one category.
* A category can have many posts.
* A post can have many tags.
* A tag can belong to many posts.

---

## ✅ Validation

The API uses Zod to validate incoming requests.

### Category Validation

```json
{
  "name": "Technology"
}
```

Rules:

* Required
* Maximum 50 characters

---

### Tag Validation

```json
{
  "name": "Node.js"
}
```

Rules:

* Required
* Maximum 50 characters

---

### Post Validation

```json
{
  "title": "My First Blog Post",
  "content": "Post content",
  "category": "Technology",
  "tags": ["Node.js", "TypeScript"]
}
```

Rules:

* Title is required
* Content is required
* Category is required
* At least one tag is required

---

## ❌ Error Handling

Example validation error:

```json
{
  "message": "Validation failed",
  "errors": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}
```

### Common Status Codes

| Code | Description           |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

## 💡 Future Improvements

* Authentication and Authorization
* Pagination
* Swagger/OpenAPI Documentation
* Automated Testing
* Rate Limiting
* Refresh Token Support
* Advanced Search Filters
* Cache Invalidation Strategy
* CI/CD Pipeline

---

## 🧑‍💻 Author

Tommy Contreras

---

## 📄 License

MIT
