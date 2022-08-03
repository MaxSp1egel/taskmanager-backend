import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'category' })
export class Category {
    @Field(type => Int)
    id: number;

    @Field()
    title: string;
}