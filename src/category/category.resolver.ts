import { Query, Resolver, Args, Int } from "@nestjs/graphql";
import { Category } from "./dto/category.dto";

@Resolver(() => Category)
export class CategoryResolver {
    @Query(() => [Category]) 
    categories() {
        return [];
    }
}