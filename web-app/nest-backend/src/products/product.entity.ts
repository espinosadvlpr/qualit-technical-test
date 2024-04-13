import { User } from "src/users/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_name: string

    @Column({ nullable: true })
    description: string

    @Column()
    ownerId: number

    @ManyToOne(()=> User, user => user.products)
    owner: User
}