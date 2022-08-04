import { Query, Resolver } from "@nestjs/graphql";
import { CategoryDto } from "./dto/category.dto";

@Resolver(() => CategoryDto)
export class CategoryResolver {
    @Query(() => [CategoryDto]) 
    categories() {
        return [];
    }
}