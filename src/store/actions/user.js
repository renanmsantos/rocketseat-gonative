export const userRequest = username => ({
  type: 'USER_REQUEST',
  payload: { username },
});

export const userFound = users => ({
  type: 'USER_FOUND',
  payload: { users },
});

export const userNotFound = () => ({
  type: 'USER_NOT_FOUND',
});
