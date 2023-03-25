import { JwtModuleOptions } from '@nestjs/jwt';
import * as fs from 'fs';

const jwtModuleOptions: JwtModuleOptions = {
  privateKey: fs.readFileSync('./private.pem'),
  publicKey: fs.readFileSync('./public.pem'),
  signOptions: {
    algorithm: 'RS256',
    issuer: 'twitter-clone',
  },
};

export default jwtModuleOptions;
