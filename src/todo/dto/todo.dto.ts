import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CategoryDto } from 'src/category/dto/category.dto';

@ObjectType({ description: 'todo' })
export class TodoDto {
    @Field(type => CategoryDto)
    category: CategoryDto;

    @Field(type => Int)
    id: number;

    @Field()
    text: string;

    @Field()
    isCompleted: boolean;
}