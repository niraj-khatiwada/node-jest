# AAA principle:

- arrange
- act
- assert

# Test Doubles

### Stubs:

- In stubs, you expect a pre-defined output. for eg: success, failure, exception, etc.
- Is the return type correct based on the parameters passed?

### Fakes:

- Fakes are the closest thing that a testing environment when compared to real feature
- For eg: If you want to connect to Google services, instead of connecting to Google in tests, you create a fake http server that mimics as Google server.
- Or you create a fake database implementation that mimics the actual database. Maybe use a in memory SQLite database as fake db.
- Fakes causes limitation where even if you provide very simple implementation not covering all aspect of tests, the test coverage might say 100%. That is solved by mocks.

### Mocks:

- When you want to mock the implementation of a function or a method
- Was the function called correctly? How many times it was called?
- Are the parameters correct?
- Mocks usually do not test the return values. Those are done using stubs.

### Spies:

- Similar to mocks but usually used to mock the methods of an object
