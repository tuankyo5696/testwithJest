
test("mock return values",()=>{
    let myMock = jest.fn();
    myMock.mockReturnValueOnce('x')
    .mockReturnValue(true)
    .mockReturnValue('Tuan')
    
    console.log(myMock(),myMock(),myMock())
})