import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Todo } from './todo.entity';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
        private categoryService: CategoryService,
    ) {}

    async findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    async check(id: number, status: boolean): Promise<Todo> {
        await this.todoRepository.update(id, { isCompleted: status });
        return this.todoRepository.findOneOrFail({
            where: {
                id: id,
            },
            relations: {
                category: true
            },
        });
    }

    async create(categoryTitle: string, text: string): Promise<Todo> {
        const todo = new Todo();
        todo.category = await this.categoryService.findOrCreate(categoryTitle);
        todo.text = text;
        todo.isCompleted = false;
        return this.todoRepository.save(todo);
    }
}