class ArraySorter {
    numberSorting(numbers: number[]): number[] {
        const len = numbers.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    const aux = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = aux;
                }
            }
        }
        return numbers;
    }
}

const sort = new ArraySorter()
const array = [35,1,55,24,32,4,3,2,6]
const sortedArray = sort.numberSorting(array)
console.log(sortedArray)