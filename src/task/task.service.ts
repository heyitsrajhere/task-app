import { Injectable, Logger } from '@nestjs/common';
import { 
  CreateTaskReqDto, 
  UpdateTaskReqDto, 
  GetTaskByIdParamDto 
} from './dto';
import { 
  CreateTaskResponseDto, 
  GetAllTasksResponseDto, 
  GetTaskByIdResponseDto, 
  UpdateTaskResponseDto 
} from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  private logger: Logger = new Logger(TaskService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateTaskReqDto): Promise<CreateTaskResponseDto> {
    try {
      const newTask = await this.prisma.task.create({
        data: {
          title: body.title,
          description: body.description,
          status: body.status,
        },
      });
      return { id: newTask.id, ...newTask };
    } catch (error) {
      this.logger.error('Error creating task', error);
      throw error;
    }
  }

  async getAll(): Promise<GetAllTasksResponseDto> {
    try {
      const tasks = await this.prisma.task.findMany();
      return { tasks };
    } catch (error) {
      this.logger.error('Error fetching tasks', error);
      throw error;
    }
  }

  async getById(param: GetTaskByIdParamDto): Promise<GetTaskByIdResponseDto> {
    try {
      const task = await this.prisma.task.findUnique({
        where: { id: param.id },
      });
      if (!task) {
        throw new Error(`Task with ID ${param.id} not found`);
      }
      return task;
    } catch (error) {
      this.logger.error(`Error fetching task with ID ${param.id}`, error);
      throw error;
    }
  }

  async update(
    param: GetTaskByIdParamDto,
    body: UpdateTaskReqDto,
  ): Promise<UpdateTaskResponseDto> {
    try {
      const updatedTask = await this.prisma.task.update({
        where: { id: param.id },
        data: {
          title: body.title,
          status: body.status,
        },
      });
      return updatedTask;
    } catch (error) {
      this.logger.error(`Error updating task with ID ${param.id}`, error);
      throw error;
    }
  }

  async delete(param: GetTaskByIdParamDto): Promise<{ message: string }> {
    try {
      await this.prisma.task.delete({
        where: { id: param.id },
      });
      return { message: `Task with ID ${param.id} deleted successfully` };
    } catch (error) {
      this.logger.error(`Error deleting task with ID ${param.id}`, error);
      throw error;
    }
  }
}
