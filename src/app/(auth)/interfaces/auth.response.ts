import { User } from './user.interface';

export interface AuthResponseSuccess {
  ok: true;
}

export interface AuthReponseError {
  ok: false;
  message: string;
}
