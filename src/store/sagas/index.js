import { all, takeLatest, call } from 'redux-saga/effects';

import api from '../../services/api';

import * as UserActions from '../actions/user';

function* login(action) {
  const { username } = action.payload;

  try {
    const response = call(api.get(), `/users/${username}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    userFound(data);
  } catch (error) {
    userNotFound();
  }
}

export default function* rootSaga() {
  return yield all([takeLatest('USER_REQUEST', login)]);
}
