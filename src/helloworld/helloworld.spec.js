import {expect} from 'chai';
import helloWorldExample from './helloworld';

describe('Hello world test', () => {
  it('should return hello world', () => {
    expect(helloWorldExample.getHelloWorl()).to.equal("helloworld");
  });
});
