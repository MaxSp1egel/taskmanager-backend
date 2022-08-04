import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./dto/category.dto";

@Resolver(() => CategoryDto)
export class CategoryResolver {
    constructor(private categoryService: CategoryService) {}

    @Query(() => [CategoryDto]) 
    categories() {
        return this.categoryService.findAll();
    }

    @Mutation(() => CategoryDto)
    createCategory(@Args('title') title: string) {
        return this.categoryService.findOrCreate(title);
    }
}