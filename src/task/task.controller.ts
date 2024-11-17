import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskReqDto } from './dto';
import {
  CreateTaskResponseDto,
  GetAllTasksResponseDto,
  GetTaskByIdResponseDto,
  UpdateTaskResponseDto,
} from './dto';
import { GetTaskByIdParamDto } from './dto';
import { UpdateTaskReqDto } from './dto';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() body: CreateTaskReqDto): Promise<CreateTaskResponseDto> {
    return await this.taskService.create(body);
  }

  @Get()
  async getAll(): Promise<GetAllTasksResponseDto> {
    return await this.taskService.getAll();
  }

  @Get(':id')
  async getById(
    @Param() param: GetTaskByIdParamDto,
  ): Promise<GetTaskByIdResponseDto> {
    return await this.taskService.getById(param);
  }

  @Put(':id')
  async update(
    @Param() param: GetTaskByIdParamDto,
    @Body() body: UpdateTaskReqDto,
  ): Promise<UpdateTaskResponseDto> {
    return await this.taskService.update(param, body);
  }

  @Delete(':id')
  async delete(@Param() param: GetTaskByIdParamDto) {
    return await this.taskService.delete(param);
  }
}
