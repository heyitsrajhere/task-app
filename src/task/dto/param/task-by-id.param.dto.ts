import { IsUUID } from "class-validator";

export class GetTaskByIdParamDto {
  @IsUUID()
  id: string;
}
