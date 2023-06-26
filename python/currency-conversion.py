currentMoney = float(input('How much money do you have? R$'))
dollarValue = float(input('How much is a dollar? US$'))
dollarMoney = currentMoney / dollarValue

print(f'\nYou have R${currentMoney:.2f}. You can to buy US${dollarMoney:.2f}.')