import { users } from '../fakedb/users';

export const getUserInformation = ({ userid }) => {
  return users.find( user => user.id === userid );
}