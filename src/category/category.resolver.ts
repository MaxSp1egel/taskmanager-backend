import { Query, Resolver, Args, Int } from "@nestjs/graphql";
import { Category } from "./dto/category.dto";

@Resolver(() => Category)
export class CategoryResolver {
    @Query(() => [Category]) 
    categories(
        @Args('id', { type: () => Int }) id: number,
        @Args('title') title: string,
    ) {
        return [];
    }
}