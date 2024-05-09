# Food Trucks API

This API provides endpoints to search for food trucks based on various criteria.

## Installation

3. Install dependencies: `npm install`

## Configuration

1. Create a `.env` file in the root directory. (Optional)
2. Add your environment variables, e.g. `PORT=3131`. (Optional)

### Start the Server

To start the server, run:

```bash
npm start
```

### Tests

To run all the tests, run:

```bash
npm run test
```

### Endpoints

```
GET /v1/foodtrucks/search
```

Searches for food trucks based on query parameters.

### Parameters

- `query`: The search query, e.g., `?FacilityType=Push Cart&lot=001`.
- Add more parameters as needed based on the available search criteria.

![image info](./screenshots/Longitude.png)
![image info](./screenshots/Multi-Search.png)
