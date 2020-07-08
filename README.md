# jwt-auth-example

## Make sure to setup PostgreSQL for the GraphQL server

1. Install PostgreSQL on your computer
2. Create database called `jwt_auth`
3. [Add a user](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e) with the username `jwt_auth_user`. Set ```JWT_AUTH_DATABASE_PASSWORD``` in the ```.env``` file. (You can change the other values are in ormconfig.json
3. Run ```yarn install``` and ```yarn start```in server
4 Run ```yarn install``` and ```yarn dev```in web-nextjs
5. visit http://localhost:3000