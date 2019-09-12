import React from 'react';

import { Section } from '../components';

const Condition = () => (
  <>
    <Section>
      <Section.title>
        Условные операторы: if, '?'
      </Section.title>
      <Section.text>
        <b>Цель:</b>
        изучить условный оператор "if" и тернарный оператор "?"
      </Section.text>
      <Section.title rank="3">
        Задания
      </Section.title>
      <Section.list>
        {[
          'Ознакомиться с материалом по данной теме',
          'Выполнить индивидуальное задание',
          'Оформить отчет'
        ]}
      </Section.list>
      <Section.divider />
      <Section.text>
        Иногда нам нужно выполнить различные
        действия в зависимости от условий.
        Для этого мы можем использовать оператор if и
        условный оператор ?, который также называют «оператор вопросительный знак».
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Оператор «if»
      </Section.title>
      <Section.text>
        Оператор if(...) вычисляет условие в скобках и,
        если результат true, то выполняет блок кода.
        Например:
      </Section.text>
      <Section.code>
        {`
let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

if (year == 2015) alert( 'Вы правы!' );`}
      </Section.code>
      <Section.text>
        В примере выше, условие – это простая проверка на равенство
        (year == 2015), но оно может быть и гораздо более сложным.
        Если мы хотим выполнить более одной инструкции,
        то нужно заключить блок кода в фигурные скобки:
      </Section.text>
      <Section.code>
        {`
if (year == 2015) {
  alert( "Правильно!" );
  alert( "Вы такой умный!" );
}`}
      </Section.code>
      <Section.text>
        {'Рекомендуется использовать фигурные скобки {} всегда, когда вы используете оператор if, даже если выполняется только одна команда. Это улучшает читабельность кода.'}
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Преобразование к логическому типу
      </Section.title>
      <Section.text>
        Оператор if (…) вычисляет выражение в скобках
        и преобразует результат к логическому типу.
        Давайте вспомним правила преобразования
        типов из главы Преобразование типов:
      </Section.text>
      <Section.list>
        {[
          'Число 0, пустая строка "", null, undefined и NaN становятся false. Из-за этого их называют «ложными» («falsy») значениями.',
          'Остальные значения становятся true, поэтому их называют «правдивыми» («truthy»).'
        ]}
      </Section.list>
      <Section.text>
        Таким образом, код при таком условии никогда не выполнится:
      </Section.text>
      <Section.code>
        {`
if (0) { // 0 is falsy
...
}`}
      </Section.code>
      <Section.text>
        …а при таком – выполнится всегда:
      </Section.text>
      <Section.code>
        {`
if (1) { // 1 is truthy
  ...
}`}
      </Section.code>
      <Section.text>
        Мы также можем передать заранее вычисленное
        в переменной логическое значение в if, например так:
      </Section.text>
      <Section.code>
        {`
let cond = (year == 2015); // преобразуется к true или false

if (cond) {
...
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Блок «else»
      </Section.title>
      <Section.text>
        Оператор if может содержать необязательный
        блок «else» («иначе»). Выполняется, когда условие ложно.
        Например:
      </Section.text>
      <Section.code>
        {`
let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

if (year == 2015) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Несколько условий: «else if»
      </Section.title>
      <Section.text>
        Иногда, нужно проверить несколько вариантов условия.
        Для этого используется блок else if.
        Например:
      </Section.text>
      <Section.code>
        {`
let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}`}
      </Section.code>
      <Section.text>
        {'В приведённом выше коде, JavaScript сначала проверит year < 2015. Если это неверно, он переходит к следующему условию year > 2015. Если оно тоже ложно, тогда сработает последний alert. Блоков else if может быть и больше. Присутствие блока else не является обязательным.'}
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Условный оператор „?“
      </Section.title>
      <Section.text>
        Иногда, нам нужно назначить переменную в зависимости от условия.
        Например:
      </Section.text>
      <Section.code>
        {`
let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);`}
      </Section.code>
      <Section.text>
        Так называемый «условный» оператор «вопросительный знак»
        позволяет нам сделать это более коротким и простым способом.
        Оператор представлен знаком вопроса ?. Его также называют «тернарный»,
        так как этот оператор, единственный в своём роде, имеет три аргумента.
        Синтаксис:
      </Section.text>
      <Section.code>
        {'let result = условие ? значение1 : значение2;'}
      </Section.code>
      <Section.text>
        Сначала вычисляется условие: если оно истинно,
        тогда возвращается значение1, в противном случае – значение2.
        Например:
      </Section.text>
      <Section.code>
        {'let accessAllowed = (age > 18) ? true : false;'}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Несколько операторов „?“
      </Section.title>
      <Section.text>
        Последовательность операторов вопросительного знака ?
        позволяет вернуть значение, которое зависит от более чем одного условия.
      </Section.text>
      <Section.text>
        Например:
      </Section.text>
      <Section.code>
        {`
let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Нетрадиционное использование „?“
      </Section.title>
      <Section.text>
        Иногда оператор вопросительный знак ? используется в качестве замены if:
      </Section.text>
      <Section.code>
        {`
let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
    alert('Верно!') : alert('Неправильно.');`}
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
        Используя конструкцию if..else, напишите код,
        который будет спрашивать: „Какое «официальное» название JavaScript?“
      </Section.text>
      <Section.text>
        Если пользователь вводит «ECMAScript», то показать:
        «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.text>
        Перепишите 'if' в '?'
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.code>
        {`
let result;

if (a * b < 10) {
  result = 'Мало';
} else {
  result = 'Много';
}`}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.code>
        {`
let result;

if (a / b < 2) {
  result = 'Мало';
} else {
  result = 'Много';
}`}
      </Section.code>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.code>
        {`
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Задание 3
      </Section.title>
      <Section.text>
        Перепишите 'if..else' в '?'
      </Section.text>
      <Section.code>
        {`
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}`}
      </Section.code>
      <Section.divider />
    </Section>
  </>
);

export default Condition;
