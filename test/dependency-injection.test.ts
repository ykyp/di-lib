import { Injectable } from '../src/decorators/Injectable';
import { Injector } from '../src/Injector';
const readableMessage = 'Hello from HelloService';

@Injectable
export class HelloService{
  constructor() {
  }

  sayHello(){
    return 'Hello from HelloService';
  }

}
@Injectable
export class SpeachService{
  constructor(public mock: HelloService) {

  }

}
@Injectable
class SpeachSimulator{
  constructor(public mock: HelloService, public mock2: SpeachService) {
  }

}


@Injectable
export class HttpService{
  constructor() {
  }

  get(){
    return 'geting url';
  }

}

@Injectable
export class Client {
  public httpService;
  constructor(_httpService: HttpService) {
    this.httpService = _httpService;
  }

  getUrl() {
    return this.httpService.get();
  }
}


describe('Test Dependency Injection', () => {
  const injector = new Injector();

  test('it should inject a not null object', () => {
    let injected: any= injector.getInstance<HelloService>(HelloService);
    expect(injected).not.toBe(undefined);
  });
  test('it should inject a not null object and use methods on it', () => {
    let injected: any = injector.getInstance(HelloService);
    const hello: any = injected.sayHello();
    expect(hello).toBe(readableMessage);
  });
  test('it should be able to inject a dependable class', () => {
    let injected: any = injector.getInstance(SpeachService);
    const hello: any = injected.mock.sayHello();
    expect(hello).toBe(readableMessage);
  });
  test('it should be able to inject a dependable class with a dependable class (2 levels down)', () => {
    let injected: any = injector.getInstance(SpeachSimulator);
    const hello: any = injected.mock.sayHello();
    const hello2: any = injected.mock2.mock.sayHello();
    expect(hello).toBe(readableMessage);
    expect(hello2).toBe(readableMessage);
  });

  test('it should inject http service to client service', () => {
    let client: any = injector.getInstance(Client);
    const getUrl: any = client.httpService.get();
    expect(getUrl).toBe('geting url');
  });


});
