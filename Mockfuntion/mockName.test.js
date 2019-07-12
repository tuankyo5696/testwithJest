
test("should throw error if email not found'",async () => {
    const callMethod = jest.fn().mockImplementation(() => {
        throw new Error();
      })
      .mockName('callMethod')
  
});
