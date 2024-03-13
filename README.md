# My Project

This project consists of several services that communicate with each other. It includes a client application, a provider application, a database application, a PostgreSQL database, and a RabbitMQ message broker.

## Services

- `client-app`: This is the client application. It's built from the `./client1` directory and listens on port 9229.
- `database-app`: This is the database application. It's built from the `./database-app` directory and listens on port 6002.
- `provider-app`: This is the provider application. It's built from the `./provider-app` directory and listens on port 6001.
- `postgresql-db`: This is a PostgreSQL database. It uses the `postgres:10` image and listens on port 5436.
- `rabbitmq`: This is a RabbitMQ message broker. It uses the `rabbitmq:3-management-alpine` image and listens on ports 5672 and 15672.

## Getting Started

1. Install Docker and Docker Compose.
2. Clone this repository.
3. Run `docker-compose up` in the root directory of the project.

## Notes

- All services are part of the `my-network2` network.
- The `client-app` service depends on the `database-app` and `rabbitmq` services.
- The `database-app` service depends on the `postgresql-db` service.
- The `provider-app` service depends on the `rabbitmq` and `database-app` services.

If you want to access the provider-app service, you would enter 
`http://localhost:6001`