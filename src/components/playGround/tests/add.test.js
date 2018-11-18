const add = (a,b) => a+b;

const genarateGreeting =(name= 'Anonymous') => `hello ${name}`;

test (`should add two numbers`,() => {
    const result = add(3,4);

    expect(result).toBe(7);

    if(result !== 7) {
        throw new Error(`You added 4 and 3 the result was ${result} Expect 7`);
    }
});

    test(`should genarate the name`, () => {
         const result = genarateGreeting('mike');
         expect(result).toBe('hello mike')
    })

    test(`should genarate the name`, () => {
        const result = genarateGreeting();
        expect(result).toBe('hello Anonymous')
   })