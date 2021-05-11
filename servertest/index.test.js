const app = require("./index");
const request = require("supertest");
//                                                   // testing display todo list from DB
// describe("GET /api/disp ", () => {
//   test("responde with array of todos", async () => {
//     const response = await request(app).get("/api/disp");
//     expect(response.body).toEqual([
//       { do: "hai", id: 1 },
//       { do: "hai", id: 2 },
//       { do: "hello", id: 3 },
//       { do: "kannan", id: 4 },
//       { do: "from postman", id: 5 },
//       { do: "from postman1", id: 6 },
//       { do: "from postman3", id: 7 },
//     ]);
//     expect(response.statusCode).toBe(200);
//   });
// });

//                                                  //testing insertion opration in to DB
describe("POST /api/insert ", () => {
  test("responde with array of todos", async () => {
    const response = await request(app)
      .post("/api/insert")
      .send({ dolist: "hello from test" });
    expect(response.body).toEqual(true);
    expect(response.statusCode).toBe(200);
  });
});
//                                                  testing deletion operation in DB
describe("POST /api/delete ", () => {
  test("responde with array of todos", async () => {
    const response = await request(app).post("/api/del");
    expect(response.body).toEqual(true);
    expect(response.statusCode).toBe(200);
  });
});
