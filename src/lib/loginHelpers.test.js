import {getUser} from './loginHelpers';

test('getUser() should return a user based on credentials passed if they exist', () => {
  const users = [{
                    "id": 1,
                    "username": "rsouth90",
                    "first": "Rob",
                    "last": "southgate",
                    "password": "chelsea90"
                  },
                  {
                    "id": 2,
                    "username": "james123",
                    "first": "Rob",
                    "last": "southgate",
                    "password": "chelsea90"
                  }];

  const credentials = { "username": "rsouth90", "password": "chelsea90" };

  const expected = { "id": 1,
                    "username": "rsouth90",
                    "first": "Rob",
                    "last": "southgate",
                    "password": "chelsea90"};

  const result = getUser(credentials, users);
  expect(result).toEqual(expected);

});
