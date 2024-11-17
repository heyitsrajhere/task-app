import { IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdateTaskReqDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  title?: string;

  @IsOptional()
  @IsEnum(
    ['PENDING', 'IN_PROGRESS', 'COMPLETED'],
    { message: 'Status must be one of the following values: PENDING, IN_PROGRESS, COMPLETED' },
  )
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}