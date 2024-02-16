import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/application/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: any): Promise<any> {
    const userAccount = await this.userService.findEmail(user.email);

    if (userAccount == null) {
      throw new UnauthorizedException();
    }
    const userPassword = userAccount?.password as string;
    const valid = await this.comparePassword(user.password, userPassword);
    if (!valid) {
      throw new UnauthorizedException();
    }

    ///***********************************************************************/
    //! Aca esta el payload para el JWT
    ///***********************************************************************/
    const payload = { email: user.email, message: 'Este es el payload' };
    return await this.jwtService.signAsync(payload);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
}
