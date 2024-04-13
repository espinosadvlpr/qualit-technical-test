import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { productDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productsRepository: Repository<Product>,
        private usersService: UsersService
    ) {}

    getAllProducts(){
        return this.productsRepository.find()
    }   

    async getProductsByUsername(username: string){
        const products = await this.productsRepository.find({
            where:{
                owner: {username}
            }
        })
        if (!products){
            throw new NotFoundException('Products not found')
        }
        return products
    }
    
    createProduct(product: productDTO){
        const userFound = this.usersService.getUserById(product.ownerId)
        if(!userFound){
            throw new NotFoundException('User not found.')
        }
        const newProduct = this.productsRepository.create(product)
        return this.productsRepository.save(newProduct)
    }
}