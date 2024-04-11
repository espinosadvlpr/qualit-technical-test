# Array Sorting Server

This is a simple Express server that provides a POST endpoint for sorting numeric arrays.

## Installation

Install the dependencies using npm:
```bash
    npm install
```

## Usage 

To run the server, you can use the following command:
```bash
    npm run dev
```
This will start the server on the default port 4000.

### Sorting a Numeric Array

To sort a numeric array, you can send a POST request to the `/sort` endpoint with the numeric array in the request body in JSON format. For example:

```json
{
  "numbers": [5, 65, 26, 14, 2]
}
```

The server will sort the numeric array and return the sorted array as the response.

#### Example

Here's an example of how you can use the server using the curl tool on the command line:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"numbers":[5,65,26,14,2]}' http://localhost:4000/sort
```

This will send a POST request to the server with the numeric array [5, 65, 26, 14, 2] in the request body. The server will return the sorted array as the response.