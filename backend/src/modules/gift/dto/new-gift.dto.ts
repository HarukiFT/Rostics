import { IsNumberString, IsString } from 'class-validator';

export class NewGiftDTO {
  @IsString()
  code: string;

  @IsNumberString()
  assignType: string;
}
