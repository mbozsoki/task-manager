require('dotenv').config()
const faunadb = require('faunadb')

const { Index, Login, Match } = faunadb.query

const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET ?? '',
    domain: process.env.FAUNADB_DOMAIN,
})

exports.handler = async (event, _context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    }

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Successful preflight call.' }),
        }
    }

    try {
        const payload = JSON.parse(event.body)
        const { email, password } = payload
        const faunaResponse = await client.query(
            Login(Match(Index('users_by_email'), email), { password })
        )

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(faunaResponse),
        }
    } catch (err) {
        console.error(err)

        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: err }),
        }
    }
}
