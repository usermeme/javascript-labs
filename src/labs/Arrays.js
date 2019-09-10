import React from 'react'

import { Section } from '../components';

const Arrays = () => (
  <>
    <Section>
      <Section.title>
        Массивы
      </Section.title>
      <Section.text>
        Объекты позволяют хранить данные со строковыми ключами. Это замечательно.
      </Section.text>
      <Section.text>
        Но довольно часто мы понимаем, что нам необходима
        упорядоченная коллекция данных, в которой присутствуют
        1-й, 2-й, 3-й элементы и т.д. Например, она понадобится нам для хранения
        списка чего-либо: пользователей, товаров, элементов HTML и т.д.
      </Section.text>
      <Section.text>
        В этом случае использовать объект неудобно, так как он
        не предоставляет методов управления порядком элементов.
        Мы не можем вставить новое свойство «между» уже существующими.
        Объекты просто не предназначены для этих целей.
      </Section.text>
      <Section.text>
        Для хранения упорядоченных коллекций существует особая
        структура данных, которая называется массив, Array.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Объявление
      </Section.title>
      <Section.text>
        Существует два варианта синтаксиса для создания пустого массива:
      </Section.text>
      <Section.code>
        {`
let arr = new Array();
let arr = [];`}
      </Section.code>
      <Section.text>
        Практически всегда используется второй вариант синтаксиса.
        В скобках мы можем указать начальные значения элементов:
      </Section.text>
      <Section.code>
        {'let fruits = ["Яблоко", "Апельсин", "Слива"];'}
      </Section.code>
      <Section.text>
        Элементы массива нумеруются, начиная с нуля.
        Мы можем получить элемент, указав его номер в квадратных скобках:
      </Section.text>
      <Section.code>
        {`
let fruits = ["Яблоко", "Апельсин", "Слива"];

alert( fruits[0] ); // Яблоко
alert( fruits[1] ); // Апельсин
alert( fruits[2] ); // Слива`}
      </Section.code>
      <Section.text>
        Мы можем заменить элемент или добавить новый к существующему массиву:
      </Section.text>
      <Section.code>
        {`
fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]

fruits[3] = 'Лимон'; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]`}
      </Section.code>
      <Section.text>
        Общее число элементов массива содержится в его свойстве length:
      </Section.text>
      <Section.code>
        {`
let fruits = ["Яблоко", "Апельсин", "Слива"];

alert( fruits.length ); // 3`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Методы pop/push, shift/unshift
      </Section.title>
      <Section.list>
        {[
          'unshift добавляет элемент в начало.',
          'shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.',
          'push добавляет элемент в конец.',
          'pop удаляет последний элемент.',
        ]}
      </Section.list>
      <Section.divider />
      <Section.title rank="2">
        toString
      </Section.title>
      <Section.text>
        Массивы по-своему реализуют метод toString, который возвращает
        список элементов, разделённых запятыми.
      </Section.text>
      <Section.code>
        {`
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Многомерные массивы
      </Section.title>
      <Section.text>
        Массивы могут содержать элементы, которые тоже являются массивами.
        Это можно использовать для создания многомерных массивов,
        например, для хранения матриц:
      </Section.text>
      <Section.code>
        {`
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, центральный элемент`}
      </Section.code>
    </Section>
    <Section>
      <Section.title>
        Задания
      </Section.title>
      <Section.divider />
      <Section.title rank="2">
        Задание 1
      </Section.title>
      <Section.text>
        Напишите функцию sumInput(), которая:
      </Section.text>
      <Section.list>
        {[
          'Просит пользователя ввести значения, используя prompt и сохраняет их в массив.',
          'Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».',
          'Подсчитывает и возвращает сумму элементов массива.'
        ]}
      </Section.list>
      <Section.divider />
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.text>
        На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
      </Section.text>
      <Section.text>
        Задача: найти непрерывный подмассив в arr,
        сумма элементов в котором максимальна.
      </Section.text>
      <Section.text>
        Функция getMaxSubSum(arr) должна возвращать эту сумму.
      </Section.text>
      <Section.text>
        Например:
      </Section.text>
      <Section.code>
        {`
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)`}
      </Section.code>
      <Section.text>
        Если все элементы отрицательные – ничего не берём(подмассив пустой)
        и сумма равна «0»:
      </Section.text>
      <Section.code>
        {'getMaxSubSum([-1, -2, -3]) = 0'}
      </Section.code>
    </Section>
  </>
);

export default Arrays;