# Leaderboard API Gateway Documentation

## Overview

This API gateway provides secure, sanitized access to casino leaderboard data. It acts as a protective proxy that exposes only non-sensitive information (usernames and wager amounts) while keeping your casino API completely private.

## Endpoint

### GET /leaderboard

Retrieves sanitized leaderboard data.

**Authentication:** API Key required (Bearer token)

**Request:**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://your-gateway.zuplo.app/leaderboard
```

**Response:**
```json
[
  {
    "username": "Player1",
    "wager": 1200
  },
  {
    "username": "Player2",
    "wager": 950
  }
]
```

## Security

### API Key Authentication
All requests require a valid API key. Requests without a valid key will receive a `401 Unauthorized` response.

### Data Sanitization
The gateway automatically sanitizes all responses from your casino API:

-  **Exposed:** Player usernames and wager amounts only
- = **Protected:** All other data (emails, balances, IDs, tokens, etc.) is removed

### How It Works

1. Client requests data from the gateway (with API key)
2. Gateway authenticates the request
3. Gateway fetches data from your casino API (using your private credentials)
4. Gateway sanitizes the response, keeping only username and wager fields
5. Client receives only safe, public data

Your casino API URL and credentials remain private in your environment variables.

## Configuration

### Environment Variables

Set the following in your Zuplo environment:

- `CASINO_URL` - Your casino API leaderboard endpoint URL

### API Keys

Create and manage API keys in the Zuplo dashboard under Services ’ API Key Manager.

## Intelligent Field Mapping

The gateway uses pattern matching to work with different API response structures:

- **Username fields:** Matches `username`, `user`, `player`, or `name`
- **Wager fields:** Matches `wager`, `bet`, `amount`, or `value`

This ensures compatibility even if your casino API structure changes.

## Error Responses

- `401 Unauthorized` - Missing or invalid API key
- `500 Internal Server Error` - Issue connecting to casino API or processing response

## Rate Limiting

API key validation results are cached for 60 seconds to improve performance.
