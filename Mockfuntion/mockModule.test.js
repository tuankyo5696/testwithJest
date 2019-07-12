const axios = require("axios");
jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: [{ _id: "5d0e0f0538775a57347e874a" }] })
}));
test("mock axios.get", async () => {
  const response = await axios.get(
    "https://pizza-ordering-api.herokuapp.com/categories"
  );
  expect(response.data).toEqual([{ _id : "5d0e0f0538775a57347e874a" }]);
});
