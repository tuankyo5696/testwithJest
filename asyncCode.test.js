
test("promise have result to be 'mydog'", () => {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("mydog");
      }, 300);
    });
    promise.then(result => expect(result).toBe("mydog"));
  });


  const axios = require("axios");
  jest.mock("axios", () => ({
    get: jest.fn().mockResolvedValue({ data: [{ name: "Pizzas" }] })
  }));
  test("mock axios.get", async () => {
    const response = await axios.get(
      "https://pizza-ordering-api.herokuapp.com/categories"
    );
    expect(response.data).toEqual([{ name: "Pizzas" }]);
  });
  
