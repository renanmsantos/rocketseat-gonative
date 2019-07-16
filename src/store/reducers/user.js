const INITIAL_STATE = {
  users: null,
  error: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USER_FOUND':
      return { ...state, users: action.payload.users, error: false };
    case 'USER_NOT_FOUND':
      return { ...state, error: true };
    default:
      return state;
  }
}
