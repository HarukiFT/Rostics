import { IsString } from 'class-validator';

export class NewGiftDTO {
  @IsString()
  code: string;
}
