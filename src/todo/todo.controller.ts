import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtGuard } from 'src/shared/guard/jwt.guard';
import { AuthenticatedUser } from 'src/shared/decorator/user.decorator';

@Controller('todos')
@UseGuards(JwtGuard)
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  create(@AuthenticatedUser() userId: string, @Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(userId, createTodoDto);
  }

  @Get()
  findAll(@AuthenticatedUser('id') userId: string) {
    return this.todoService.findAll(userId);
  }

  @Get('finished')
  findFinished(@AuthenticatedUser('id') userId: string) {
    return this.todoService.findAll(userId, true);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}