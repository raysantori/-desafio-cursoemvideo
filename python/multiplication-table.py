multiplicationTableNumber = int(input('Which multiplication table do you want? '))
print()

for i in range(0, 11):
    multiplicationTable = multiplicationTableNumber * i
    print(f'{multiplicationTableNumber} x {i} = {multiplicationTable}')
