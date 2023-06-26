width = float(input('What is width from the wall in meter? '))
height = float(input('What is height from the wall in meter? '))
area = width * height
paintNeeded = area * (1/2)

print(f'\nThe amount of paint needed to paint a room {area} m^2 is {paintNeeded} L.')
