import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createTodoDto: CreateTodoDto) {
    console.log(userId)
    const data = {
        ...createTodoDto,
        userId: userId
    }
    console.log(data)
    return this.prisma.todo.create({
      data: data,
    });
  }

  async findAll(userId: string, finished?: boolean) {
    return this.prisma.todo.findMany({
      where: {
        userId,
        finished: finished !== undefined ? finished : undefined,
      },
    });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: string) {
    return this.prisma.todo.delete({ where: { id } });
  }
}