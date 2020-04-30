import {B64Service} from './b64.service';

let b64 = new B64Service();
describe('b64', () => {
  it('should return encoded string from object', () => {
    let str = b64.encodeInputQuery({test:'test'});
    expect(typeof str).toBe('string');
  })

  it('should return empty string from object without value', () => {
    let str = b64.encodeInputQuery({'test':''});
    expect(typeof str).toBe('');
  })
})
