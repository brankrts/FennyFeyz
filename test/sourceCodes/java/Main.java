
package test.sourceCodes.java;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello world");

    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static int sub(int a, int b) {
        return a - b;
    }

    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    public static boolean is_prime(int n) {
        if (n <= 1) {
            return false;
        }
        if (n <= 3) {
            return true;
        }
        if (n % 2 == 0 || n % 3 == 0) {
            return false;
        }
        int i = 5;
        while (i * i <= n) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
            i += 6;
        }
        return true;
    }

    public static int fibonacci(int n) {
        if (n <= 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    public static int max_element(int[] arr) {
        int maxVal = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > maxVal) {
                maxVal = num;
            }
        }
        return maxVal;
    }

    public static double calculate_average(int[] arr) {
        int total = 0;
        for (int num : arr) {
            total += num;
        }
        double average = (double) total / arr.length;
        return average;
    }

    public static boolean is_perfect_number(int n) {
        int sum = 0;
        for (int i = 1; i < n; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }
        return sum == n;
    }

    public static boolean is_palindrome(int n) {
        String strN = Integer.toString(n);
        String reversedStrN = new StringBuilder(strN).reverse().toString();
        return strN.equals(reversedStrN);
    }

    public static int[] sort_ascending(int[] arr) {
        Arrays.sort(arr);
        return arr;
    }

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static List<Integer> prime_factors(int n) {
        List<Integer> factors = new ArrayList<>();
        int divisor = 2;
        while (n > 1) {
            while (n % divisor == 0) {
                factors.add(divisor);
                n /= divisor;
            }
            divisor++;
        }
        return factors;
    }

    public static int[][] matrix_multiplication(int[][] matrix1, int[][] matrix2) {
        int[][] result = new int[matrix1.length][matrix2[0].length];
        for (int i = 0; i < matrix1.length; i++) {
            for (int j = 0; j < matrix2[0].length; j++) {
                int value = 0;
                for (int k = 0; k < matrix2.length; k++) {
                    value += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = value;
            }
        }
        return result;
    }

}
