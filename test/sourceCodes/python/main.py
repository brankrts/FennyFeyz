def add(a, b):
    return a + b


def sub(a, b):
    return a - b


def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)


def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True


def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)


def max_element(arr):
    max_val = float('-inf')
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val


def calculate_average(arr):
    total = sum(arr)
    average = total / len(arr)
    return "{:.1f}".format(average)


def is_perfect_number(n):
    divisors = [i for i in range(1, n) if n % i == 0]
    return sum(divisors) == n


def is_palindrome(n):
    return str(n) == str(n)[::-1]


def sort_ascending(arr):
    return sorted(arr)


def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def prime_factors(n):
    factors = []
    divisor = 2
    while n > 1:
        while n % divisor == 0:
            factors.append(divisor)
            n //= divisor
        divisor += 1
    return factors


def matrix_multiplication(matrix1, matrix2):
    result = []
    for i in range(len(matrix1)):
        row = []
        for j in range(len(matrix2[0])):
            value = sum(matrix1[i][k] * matrix2[k][j]
                        for k in range(len(matrix2)))
            row.append(value)
        result.append(row)
    return result
