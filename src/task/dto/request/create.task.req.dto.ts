import { IsString, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateTaskReqDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsEnum(
    ['PENDING', 'IN_PROGRESS', 'COMPLETED'],
    { message: 'Status must be one of the following values: PENDING, IN_PROGRESS, COMPLETED' },
  )
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}
