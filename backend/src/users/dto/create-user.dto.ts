import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsString()
  @Length(10, 15)
  phone: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}