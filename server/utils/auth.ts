// create jwt auth token
import { sign, verify } from "jsonwebtoken";

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

export function authMiddleware({ req }: any) {
  let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data }: any = verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    return req;
  };
export function signToken ({ email, username, _id }: any) {
    const payload = { email, username, _id };
    return sign({ data: payload }, secret, { expiresIn: expiration });
  };