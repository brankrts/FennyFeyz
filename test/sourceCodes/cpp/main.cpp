#include <iostream>
#include <vector>
#include <cmath>
#include <string>
#include <map>

int add(int a, int b)
{
    return a + b;
}

int sub(int a, int b)
{
    return a - b;
}

int factorial(int n)
{
    if (n == 0)
    {
        return 1;
    }
    return n * factorial(n - 1);
}

bool is_prime(int n)
{
    if (n <= 1)
    {
        return false;
    }
    if (n <= 3)
    {
        return true;
    }
    if (n % 2 == 0 || n % 3 == 0)
    {
        return false;
    }
    int i = 5;
    while (i * i <= n)
    {
        if (n % i == 0 || n % (i + 2) == 0)
        {
            return false;
        }
        i += 6;
    }
    return true;
}

int fibonacci(int n)
{
    if (n <= 0)
    {
        return 0;
    }
    else if (n == 1)
    {
        return 1;
    }
    else
    {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int max_element(const std::vector<int> &arr)
{
    int max_val = std::numeric_limits<int>::min();
    for (int num : arr)
    {
        if (num > max_val)
        {
            max_val = num;
        }
    }
    return max_val;
}

double calculate_average(const std::vector<int> &arr)
{
    int total = 0;
    for (int num : arr)
    {
        total += num;
    }
    double average = static_cast<double>(total) / arr.size();
    return round(average * 10) / 10;
}

bool is_perfect_number(int n)
{
    int sum = 1;
    for (int i = 2; i * i <= n; i++)
    {
        if (n % i == 0)
        {
            sum += i;
            if (i != n / i)
            {
                sum += n / i;
            }
        }
    }
    return sum == n;
}

bool is_palindrome(int n)
{
    std::string str = std::to_string(n);
    for (size_t i = 0; i < str.length() / 2; i++)
    {
        if (str[i] != str[str.length() - 1 - i])
        {
            return false;
        }
    }
    return true;
}

std::vector<int> sort_ascending(const std::vector<int> &arr)
{
    std::vector<int> sortedArr = arr;
    std::sort(sortedArr.begin(), sortedArr.end());
    return sortedArr;
}

int gcd(int a, int b)
{
    while (b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

std::vector<int> prime_factors(int n)
{
    std::vector<int> factors;
    int divisor = 2;
    while (n > 1)
    {
        while (n % divisor == 0)
        {
            factors.push_back(divisor);
            n /= divisor;
        }
        divisor++;
    }
    return factors;
}

std::vector<std::vector<int>> matrix_multiplication(const std::vector<std::vector<int>> &matrix1,
                                                    const std::vector<std::vector<int>> &matrix2)
{
    int rows1 = matrix1.size();
    int cols1 = matrix1[0].size();
    int cols2 = matrix2[0].size();

    std::vector<std::vector<int>> result(rows1, std::vector<int>(cols2, 0));

    for (int i = 0; i < rows1; i++)
    {
        for (int j = 0; j < cols2; j++)
        {
            for (int k = 0; k < cols1; k++)
            {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

int main()
{
    return 0;
}
