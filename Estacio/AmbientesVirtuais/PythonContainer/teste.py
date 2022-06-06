
def fibo(n):
    'Determina o n-ésimo termo da sequencia de Fibonacci'
    if n == 1 or n == 2:
        return 1
    else:
        return fibo(n - 1) + fibo(n - 2)


n = 8

print(help(fibo))




