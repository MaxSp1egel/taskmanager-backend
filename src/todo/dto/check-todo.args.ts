import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CheckTodoArgs {
    @Field(type => Int)
    id: number;

    @Field()
    status: boolean;
}