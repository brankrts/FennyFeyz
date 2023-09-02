function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function is_prime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function max_element(arr) {
  let maxVal = -Infinity;
  for (const num of arr) {
    if (num > maxVal) {
      maxVal = num;
    }
  }
  return maxVal;
}

function calculate_average(arr) {
  const total = arr.reduce((sum, num) => sum + num, 0);
  const average = total / arr.length;
  return average.toFixed(1);
}

function is_perfect_number(n) {
  const divisors = Array.from({ length: n }, (_, i) => i + 1).filter(
    (i) => n % i === 0
  );
  return divisors.reduce((sum, divisor) => sum + divisor, 0) === n;
}

function is_palindrome(n) {
  return String(n) === String(n).split("").reverse().join("");
}

function sort_ascending(arr) {
  return arr.slice().sort((a, b) => a - b);
}

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function prime_factors(n) {
  const factors = [];
  let divisor = 2;
  while (n > 1) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor++;
  }
  return factors;
}

function matrix_multiplication(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    const row = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let value = 0;
      for (let k = 0; k < matrix2.length; k++) {
        value += matrix1[i][k] * matrix2[k][j];
      }
      row.push(value);
    }
    result.push(row);
  }
  return result;
}
