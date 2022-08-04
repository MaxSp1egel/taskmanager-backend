import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TodoDto } from 'src/todo/dto/todo.dto';

@ObjectType({ description: 'category' })
export class CategoryDto {
    @Field(type => Int)
    id: number;

    @Field()
    title: string;

    @Field(type => [TodoDto])
    todos: TodoDto[];
}