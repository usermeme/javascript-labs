import React from 'react'

import { Section } from '../components'

const Loops = () => (
  <>
    <Section>
      <Section.title>
        Циклы while и for
      </Section.title>
      <Section.text>
        При написании скриптов зачастую встаёт задача сделать
        однотипное действие много раз.
        Например, вывести товары из списка один за другим.
        Или просто перебрать все числа от 1 до 10 и для
        каждого выполнить одинаковый код.
        Для многократного повторения одного участка кода предусмотрены циклы.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Цикл «while»
      </Section.title>
      <Section.text>
        Цикл while имеет следующий синтаксис:
      </Section.text>
      <Section.code>
        {`
while (condition) {
  // код
  // также называемый "телом цикла"
}`}
      </Section.code>
      <Section.text>
        {'Код из тела цикла выполняется, пока условие condition истинно. Например, цикл ниже выводит i, пока i < 3:'}
      </Section.text>
      <Section.code>
        {`
let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}`}
      </Section.code>
      <Section.text>
        {'Одно выполнение тела цикла по-научному называется итерация. Цикл в примере выше совершает три итерации.'}
      </Section.text>
      <Section.text>
        Если бы строка i++ отсутствовала в примере выше,
        то цикл бы повторялся (в теории) вечно. На практике, конечно,
        браузер не позволит такому случиться, он предоставит
        пользователю возможность остановить «подвисший»
        скрипт, а JavaScript на стороне
        сервера придётся «убить» процесс.
      </Section.text>
      <Section.text>
        Любое выражение или переменная может быть условием цикла, а не
        только сравнение: условие while вычисляется
        и преобразуется в логическое значение.
        Например, while (i) – более краткий вариант while (i != 0):
      </Section.text>
      <Section.code>
        {`
let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Цикл «do…while»
      </Section.title>
      <Section.text>
        Проверку условия можно разместить под телом цикла, используя специальный синтаксис do..while:
      </Section.text>
      <Section.code>
        {`
do {
  // тело цикла
} while (condition);`}
      </Section.code>
      <Section.text>
        Цикл сначала выполнит тело, а затем проверит условие condition,
        и пока его значение равно true, он будет выполняться снова и снова.
        Например:
      </Section.text>
      <Section.code>
        {`
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);`}
      </Section.code>
      <Section.text>
        {'Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие окажется ложным. На практике чаще используется форма с предусловием: while(…) {…}.'}
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Цикл «for»
      </Section.title>
      <Section.text>
        Более сложный, но при этом самый распространённый цикл — цикл for.
        Выглядит он так:
      </Section.text>
      <Section.code>
        {`
for (начало; условие; шаг) {
  // ... тело цикла ...
}`}
      </Section.code>
      <Section.text>
        В целом, алгоритм работы цикла выглядит следующим образом:
      </Section.text>
      <Section.code>
        {`
Выполнить *начало*
→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
→ ...`}
      </Section.code>
      <Section.title rank="3">
        Пропуск частей «for»
      </Section.title>
      <Section.text>
        Любая часть for может быть пропущена.
        Для примера, мы можем пропустить начало если нам
        ничего не нужно делать перед стартом цикла.
        Вот так:
      </Section.text>
      <Section.code>
        {`
let i = 0; // мы уже имеем объявленную i с присвоенным значением

for (; i < 3; i++) { // нет необходимости в "начале"
  alert( i ); // 0, 1, 2
}`}
      </Section.code>
      <Section.text>
        Можно убрать и шаг:
      </Section.text>
      <Section.code>
        {`
let i = 0;

for (; i < 3;) {
  alert( i++ );
}`}
      </Section.code>
      <Section.text>
        {'Это сделает цикл аналогичным while (i < 3).'}
      </Section.text>
      <Section.text>
        А можно и вообще убрать всё, получив бесконечный цикл:
      </Section.text>
      <Section.code>
        {`
for (;;) {
  // будет выполняться вечно
}`}
      </Section.code>
      <Section.text>
        При этом сами точки с запятой ; обязательно должны присутствовать, иначе будет ошибка синтаксиса.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Прерывание цикла: «break»
      </Section.title>
      <Section.text>
        Обычно цикл завершается при вычислении условия в false.
        Но мы можем выйти из цикла в любой момент с помощью специальной директивы break.
        Например, следующий код подсчитывает сумму вводимых чисел до
        тех пор, пока посетитель их вводит, а затем – выдаёт:
      </Section.text>
      <Section.code>
        {`
let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );`}
      </Section.code>
      <Section.text>
        Директива break в строке (*) полностью прекращает
        выполнение цикла и передаёт управление на строку за его телом, то есть на alert.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Переход к следующей итерации: continue
      </Section.title>
      <Section.text>
        Директива continue – «облегчённая версия» break. При её выполнении цикл не прерывается,
        а переходит к следующей итерации (если условие все ещё равно true).
        Её используют, если понятно, что на текущем повторе цикла делать больше нечего.
        Например, цикл ниже использует continue, чтобы выводить только нечётные значения:
      </Section.text>
      <Section.code>
        {`
for (let i = 0; i < 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;

  alert(i); // 1, затем 3, 5, 7, 9
}`}
      </Section.code>
      <Section.text>
        Для чётных значений i, директива continue прекращает выполнение
        тела цикла и передаёт управление на следующую итерацию
        for (со следующим числом). Таким образом alert вызывается только для нечётных значений.
      </Section.text>
    </Section>
    <Section>
      <Section.title>
        Задания
      </Section.title>
      <Section.divider />
      <Section.title rank="2">
        Задание 1
      </Section.title>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.text>
        При помощи цикла for выведите чётные числа от 2 до 10.
      </Section.text>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.text>
        При помощи цикла for выведите нечётные числа от 21 до 30.
      </Section.text>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.text>
        При помощи цикла for выведите чётные числа от 13 до 29.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.text>
        Перепишите код, заменив цикл for на while, без изменения поведения цикла.
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.code>
        {`
for (let i = 0; i < 3; i++) {
  alert( \`number \${i}!\` );
}`}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.code>
        {`
for (let i = 0; i < 10; i+=2) {
  alert( \`number \${i}!\` );
}`}
      </Section.code>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.code>
        {`
for (let i = 10; i > 3; i-- {
  alert( \`number \${i}!\` );
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Задание 3
      </Section.title>
      <Section.text>
        Напишите цикл, который предлагает prompt ввести число,
        большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
      </Section.text>
      <Section.text>
        Цикл должен спрашивать число пока либо посетитель не введёт число,
        большее 100, либо не нажмёт кнопку Отмена (ESC).
      </Section.text>
      <Section.text>
        Предполагается, что посетитель вводит только числа.
        Предусматривать обработку нечисловых строк в этой задаче необязательно.
      </Section.text>
    </Section>
  </>    
);

export default Loops;