def suma_numeros(lista):
    total = 0
    for numero in lista:
        total += numero
    return total

resultado = suma_numeros([1, 2, 3, 4, 5])
print("La suma es:", resultado)