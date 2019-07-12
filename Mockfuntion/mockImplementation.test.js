test("also mock implementation", () => {
    const mock = jest.fn().mockImplementation(() => "bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });