const request = require('supertest')
const server = require('../index');

afterAll((done) =>{
    server.close(done);
})

describe('GET /books', () =>{
    test('Should return all Books', async () =>{
        const response = await request(server).get('/books');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/application\/json/);
        expect(Array.isArray(response.body)).toBe(true);
    })
});

describe('GET /books/:id', () => {
    test('Should return a book based on its ID', async () => {
       let bookId = 1;
        const response = await request(server).get(`/books/${bookId}`);
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/application\/json/);
    })
})