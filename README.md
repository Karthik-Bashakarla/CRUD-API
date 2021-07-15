A simple CRUD API built with Node.js and Express.js

Built endpoints for basic operations:

  - To create a resource
  - To get all resources
  - To get a specific resource
  - To update an existing resource (to be done)
  - To delete a resource (to be done)

Endpoints:

 * POST /api/books - Creates a book in books collection.
   Schema: The body of the post request should have the following schema,
   
   ```javascript
   {
    "name": <String>
   }
   ```
   name is required field with a minimum of 3 characters and maximum of 15 characters.
   
 * GET /api/books - Fetches all the books from the collection.
 
 * GET /api/books/\<id\> - Fetches a book with a id = \<id\> from the collection.

     
