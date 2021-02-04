// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Expose-Headers': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
}

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod != 'POST') {
      return {
        headers,
        statusCode: 200,
        body: JSON.stringify({ error: true, message: 'Method not allowed' }),
      }
    }
    const body = JSON.parse(event.body)
    if (body.password == 'error') {
      return {
        headers,
        statusCode: 401,
        body: JSON.stringify({ error: true, message: 'Wrong password!' })
      }
    }
    return {
      headers,
      statusCode: 200,
      body: JSON.stringify({ message: 'Login success!', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRvZGF0a293ZSBwdW5rdHkgemEgc3ByYXdkemVuaWUgdG9rZW51ISBXc3BvbW5paiBvIHR5bSBuYSByb3ptb3dpZSA7KSIsImlhdCI6MTUxNjIzOTAyMn0.UfZdSF7gARzcHuQfbx0NzoVRJaP8vj6TnukdUOjDCe4' })
    }
  } catch (err) {
    return {
      headers,
      statusCode: 500,
      body: JSON.stringify({ error: true, message: err.toString() }),
    }
  }
}
