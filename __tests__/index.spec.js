require('../src');

describe('api.basic test', () => {
  test('nx.defaultsValidate normal case', function () {
    const target = {
      username: 'xiaoming',
      email: 'abc',
      other: 'value',
      nested: {
        company: {
          address: null
        }
      }
    };

    const res = nx.defaultsValidate(target, {
      username: (value) => value.length > 3 ? null : 'anonymous',
      email: (value) => value.includes('@') ? null : 'example@email.com',
      'nested.company.address': (value) => value ? null : 'unknown'
    });

    // the same value
    expect(res === target).toBe(true);
    expect(res).toEqual({
      username: 'xiaoming',
      email: 'example@email.com',
      other: 'value',
      nested: {
        company: {
          address: 'unknown'
        }
      }
    });
  });
});
