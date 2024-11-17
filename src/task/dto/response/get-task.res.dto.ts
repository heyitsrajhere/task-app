export class GetAllTasksResponseDto {
  tasks: Array<{
    id: string;
    title: string;
    description?: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
    createdAt: Date;
  }>;
}
