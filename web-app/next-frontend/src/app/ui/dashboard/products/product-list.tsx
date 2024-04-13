'use client'

import { Product } from '@/app/interfaces'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

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

        </>
    )
}