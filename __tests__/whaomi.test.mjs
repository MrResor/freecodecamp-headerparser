import { describe, it, expect } from 'vitest';
import request from 'supertest';

import { app } from '../src/express.mjs';

describe('/api/hello', () => {
    it("should say hello", async () => {
        const res = await request(app).get('/api/whoami').set("x-forwarded-for", "111.222.123.234").set("accept-language", "en-US,en;q=0.9").set("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3");
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toStrictEqual({
            ipaddress: "111.222.123.234",
            language: "en-US,en;q=0.9",
            software: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
        });
    });
});