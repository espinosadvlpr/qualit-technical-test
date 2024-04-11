import express from 'express'
import { ArraySorter } from './arraySorter' 

const PORT = 4000
const app = express()

app.use(express.json())

app.post('/sort', (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
        return res.status(400).json({ error: 'A numerical array named "numbers" was expected in the body of the request' });
    }

    try {
        const sort = new ArraySorter();
        const sortedNumbers = sort.numberSorting(numbers);
        return res.status(200).json({ sortedNumbers });
    } catch (error) {
        return res.status(500).json({ error: 'An error ocurred while sorting the array' });
    }
})

app.use((_,res) => {
    res.status(404).send('The endpoint you are looking for was not found')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})