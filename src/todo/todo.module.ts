import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/category/category.module';
import { Todo } from './todo.entity';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo]),
        CategoryModule,
    ],
    providers: [
        TodoService,
        TodoResolver,
    ],
})
export class TodoModule {}