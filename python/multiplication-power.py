number = float(input('Insert a number: '))
numberDouble = number * 2
numberTriple = number * 3
numberSquareRoot = pow(number, (1/2))

print(f'The double of the number {number:.2f} is {numberDouble:.2f},', end=' ')
print(f'the triple is {numberTriple:.2f}', end=' ')
print(f'and the square root is {numberSquareRoot:.2f}.')
