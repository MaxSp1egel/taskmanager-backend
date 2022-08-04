import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoArgs {
    @Field()
    categoryName: string;

    @Field()
    text: string;
}