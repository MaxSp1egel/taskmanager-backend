import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'category' })
export class CategoryDto {
    @Field(type => Int)
    id: number;

    @Field()
    title: string;
}