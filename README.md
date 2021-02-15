# Dependency Injection library

A minimal injector library using custom Typescript Decorators and Reflection

## Usage

Annotate your class with `@Injectable` and then use the `injector` to get its insance.
For example


```
   @Injectable
   export class HelloService{
     constructor() {
     }
   
     sayHello(){
       return 'Hello from HelloService';
     }
   
   }
   
   const injector = new Injector();
   injector.getInstance<HelloService>(HelloService);
```

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.
