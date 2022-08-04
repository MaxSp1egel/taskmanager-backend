import { Resolver, Mutation, Args, Int } from "@nestjs/graphql";
import { TodoService } from "./todo.service";
import { TodoDto } from "./dto/todo.dto";
import { CreateTodoArgs } from "./dto/create-todo.args";
import { CheckTodoArgs } from "./dto/check-todo.args";

@Resolver(() => TodoDto)
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Mutation(() => TodoDto)
    checkTodo(@Args('input') args: CheckTodoArgs) {
        return this.todoService.check(args.id, args.status);
    }

    @Mutation(() => TodoDto)
    createTodo(@Args('input') args: CreateTodoArgs) {
        return this.todoService.create(args.categoryName, args.text);
    }
}