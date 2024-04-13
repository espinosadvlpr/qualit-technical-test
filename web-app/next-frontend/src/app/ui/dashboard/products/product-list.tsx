'use client'

import { Product } from '@/app/interfaces'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material'

interface ProductProps {
    username: string | null | undefined
}

const getProducts = async (username: string | null | undefined): Promise<Product[]> => {
    const response = await axios.get(`http://localhost:3000/products/${username}`)
    return response.data
}

export default function ProductsList({ username }: ProductProps) {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchInvoices = async () => {
            const productsList = await getProducts(username)
            setProducts(productsList)
        }
        fetchInvoices()
    }, [])

    return (
        <>
            <div className="flex items-center justify-between p-2 rounded mb-4">
                <h1 className="text-xl font-bold md:text-2xl mr-auto">Products</h1>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Product ID</TableCell>
                                <TableCell align="center">Product Name</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Owner ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map(product => (
                                <TableRow key={product.id}>
                                    <TableCell align="center">{product.id}</TableCell>
                                    <TableCell align="center">{product.product_name}</TableCell>
                                    <TableCell align="center">{product.description}</TableCell>
                                    <TableCell align="center">{product.ownerId}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}