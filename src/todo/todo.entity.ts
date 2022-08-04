import { Category } from 'src/category/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Category, category => category.todos)
    category: Category

    @Column()
    text: string;

    @Column()
    isCompleted: boolean;
}