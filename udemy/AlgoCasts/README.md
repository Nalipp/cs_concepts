# AlgoCasts

### run tests

$ jest fib/test.js --watch

or

$ jest fib --watch

### measure performance

```
  var start = new Date().getTime();

  ...

  var end = new Date().getTime();
  var time = end - start;
  console.log('Execution time: ' + time);
```

### debugging

type 'debugger' where you want to pause the code execution

$ node inspect <filename>;

$ c      // to continue

$ repl   // to access the variables

you have to exit repl, press c and re-enter repl to move through iterations??


