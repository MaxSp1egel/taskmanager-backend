import { Query, Resolver, Mutation, Args, Int } from "@nestjs/graphql";
import { TodoService } from "./todo.service";
import { TodoDto } from "./dto/todo.dto";

@Resolver(() => TodoDto)
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Mutation(() => TodoDto)
    checkTodo(
        @Args('id', { type: () => Int }) id: number,
        @Args('status') status: boolean,
    ) {
        return this.todoService.check(id, status);
    }

    @Mutation(() => TodoDto)
    createTodo(
        @Args('categoryName') categoryTitle: string,
        @Args('text') todoTitle: string,
    ) {
        return this.todoService.create(categoryTitle, todoTitle);
    }
}