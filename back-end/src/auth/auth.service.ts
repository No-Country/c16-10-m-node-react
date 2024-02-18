import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const userAccount = await this.userService.findEmail(email);
    if (userAccount == null) {
      throw new UnauthorizedException();
    }
    const userPassword = userAccount?.password as string;
    const valid = await this.comparePassword(password, userPassword);
    if (!valid) {
      throw new UnauthorizedException();
    }
    //***********************************************************************/
    //! Aca esta el payload para el JWT
    //***********************************************************************/
    const payload = {
      id: userAccount._id,
      email: userAccount.email,
      message: 'Este es el payload',
    };
    return this.jwtService.signAsync(payload);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
}
