// @flow
import { expect } from 'chai'


type num = number

const list = []

export default function FibonacciRecursive(number: num): num[] {
  return ((): num[] => {
    switch (list.length) {
      case 0:
        list.push(1)
        return FibonacciRecursive(number)
      case 1:
        list.push(1)
        return FibonacciRecursive(number)
      case number:
        return list
      default:
        list.push(list[list.length - 1] + list[list.length - 2])
        return FibonacciRecursive(number)
    }
  })()
}

// @TODO
// FibonacciMemoizeRecursive (DP)

test('Fibonacci()', () => {
  expect(FibonacciRecursive(10)).to.eql([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
})
