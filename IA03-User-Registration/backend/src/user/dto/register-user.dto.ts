import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsEmail({}, { message: 'Email must be valid' })
  @IsNotEmpty()
  email: string;

  @IsNotEmpty({ message: 'Password required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
