const axios = require('axios') ;
const app = require('../index');
const request = require('supertest');

describe("Tests For Register Page",()=>{
    it("test 1: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Dan",
            lastname: "Cohen"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 2: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Revital",
            lastname: "Dahan"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 3: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "David",
            lastname: "Davidov"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 4: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Dana",
            lastname: "Gil"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 5: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Beni",
            lastname: "Shtein"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 6: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Gil",
            lastname: "Asif"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 7: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Ilan",
            lastname: "Shklover"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 8: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Nikita",
            lastname: "Solonets"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 9: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Shay",
            lastname: "Levi"
        })
        expect(response.statusCode).toBe(200);
    });
    it("test 10: ",async ()=>{
        const response = await request(app).post("/grades").send({
            firstname: "Ofir",
            lastname: "Alon"
        })
        expect(response.statusCode).toBe(200);
    });             
});
       
      
