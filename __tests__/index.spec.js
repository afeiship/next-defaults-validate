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
      username: (value) => (value.length > 3 ? null : 'anonymous'),
      email: (value) => (value.includes('@') ? null : 'example@email.com'),
      'nested.company.address': (value) => (value ? null : 'unknown')
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

  test('defaults get customize value', () => {
    const target = {
      name: 'xiaoming',
      email: null,
      ava: 3,
      nested: {
        score: 5
      }
    };

    const res = nx.defaultsValidate(target, {
      name: (value) => (value.length > 3 ? 'ANONYMOUS' : value.upperCase()),
      email: (value) => (value?.includes('@') ? null : 'example@email.com'),
      'nested.score': (value, target) => {
        if (value > target.ava && value < 5) {
          return '及格';
        }
        if (value === 5) {
          return '满分';
        }
        return '不及格';
      }
    });

    expect(res).toEqual({
      name: 'ANONYMOUS',
      email: 'example@email.com',
      ava: 3,
      nested: {
        score: '满分'
      }
    });
  });
});
