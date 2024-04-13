import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { productDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(
        private productsService: ProductsService
    ) {}

    @Get()
    getAllProducts(){
        return this.productsService.getAllProducts()
    }

    @Get(':username')
    getProductsByUsername(@Param('username') username: string){
        return this.productsService.getProductsByUsername(username)
    }

    @Post('create')
    createProduct(@Body() product: productDTO){
        return this.productsService.createProduct(product)
    }
}