import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ) {}

    async findAll(): Promise<Category[]> {
        return this.categoryRepository.find({
            relations: {
                todos: true,
            },
        });
    }

    async findOrCreate(title: string): Promise<Category> {
        return await this.categoryRepository.findOneBy({ title: title }) ?? this.create(title);
    }

    async create(title: string): Promise<Category> {
        const category = new Category();
        category.title = title;
        return this.categoryRepository.save(category);
    }
}