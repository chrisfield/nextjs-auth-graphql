module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "jwt_auth_user",
  "password": process.env.JWT_AUTH_DATABASE_PASSWORD,
  "database": "jwt_auth",
  "synchronize": true,
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}
