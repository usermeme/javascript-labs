import React from 'react';

import { Section } from '../components';

const Functions = () => (
  <>
    <Section>
      <Section.title>
        Функции
      </Section.title>
      <Section.text>
        <b>Цель:</b>
        научиться работать с функциями в JavaScript,
        изучить основные понятия.
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
        Зачастую нам надо повторять одно и то же
        действие во многих частях программы.
        Например, необходимо красиво вывести сообщение
        при приветствии посетителя, при выходе посетителя с сайта, ещё где-нибудь.
        Чтобы не повторять один и тот же код во многих
        местах, придуманы функции. Функции являются основными
        «строительными блоками» программы.
        Примеры встроенных функций вы уже видели – это
        alert(message), prompt(message, default) и
        confirm(question). Но можно создавать и свои.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Объявление функции
      </Section.title>
      <Section.text>
        Для создания функций мы можем использовать объявление функции.
      </Section.text>
      <Section.code>
        {`
function showMessage() {
  alert( 'Всем привет!' );
}`}
      </Section.code>
      <Section.text>
        Вначале идёт ключевое слово function, после него имя функции,
        затем список параметров в круглых скобках через запятую
        (в вышеприведённом примере он пустой) и, наконец,
        код функции, также называемый «телом функции», внутри фигурных скобок.
      </Section.text>
      <Section.code>
        {`
function имя(параметры) {
  ...тело...
}`}
      </Section.code>
      <Section.text>
        Наша новая функция может быть вызвана по её имени: showMessage().
      </Section.text>
      <Section.code>
        {`
function showMessage() {
  alert( 'Всем привет!' );
}

showMessage();
showMessage();`}
      </Section.code>
      <Section.text>
        Вызов showMessage() выполняет код функции.
        Здесь мы увидим сообщение дважды.
        Этот пример явно демонстрирует одно из главных
        предназначений функций: избавление от дублирования кода.
        Если понадобится поменять сообщение или способ его
        вывода – достаточно изменить его в одном месте: в функции, которая его выводит
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Локальные переменные
      </Section.title>
      <Section.text>
        Переменные, объявленные внутри функции, видны только внутри этой функции.
      </Section.text>
      <Section.code>
        {`
function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная

  alert( message );
}

showMessage(); // Привет, я JavaScript!

alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Внешние переменные
      </Section.title>
      <Section.text>
        У функции есть доступ к внешним переменным, например:
      </Section.text>
      <Section.code>
        {`
let userName = 'Вася';

function showMessage() {
  let message = 'Привет, ' + userName;
  alert(message);
}

showMessage(); // Привет, Вася`}
      </Section.code>
      <Section.text>
        Функция обладает полным доступом к внешним переменным и может изменять их значение.
      </Section.text>
      <Section.code>
        {`
let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); // Вася перед вызовом функции

showMessage();

alert( userName ); // Петя, значение внешней переменной было изменено функцией`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Параметры
      </Section.title>
      <Section.text>
        Мы можем передать внутрь функции любую информацию,
        используя параметры (также называемые аргументы функции).
        В нижеприведённом примере функции передаются два параметра: from и text.
      </Section.text>
      <Section.code>
        {`
function showMessage(from, text) { // аргументы: from, text
  alert(from + ': ' + text);
}

showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)`}
      </Section.code>
      <Section.text>
        Когда функция вызывается в строках (*) и (**), переданные значения копируются в
        локальные переменные from и text. Затем они используются в теле функции.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
       Параметры по умолчанию
      </Section.title>
      <Section.text>
        Если параметр не указан, то его значением становится undefined.
        Например, вышеупомянутая функция showMessage(from, text)
        может быть вызвана с одним аргументом:
      </Section.text>
      <Section.code>
        {'showMessage("Аня");'}
      </Section.code>
      <Section.text>
        Это не приведёт к ошибке. Такой вызов выведет
        "Аня: undefined". В вызове не указан
        параметр text, поэтому предполагается, что text === undefined.
        Если мы хотим задать параметру text значение по умолчанию, мы должны указать его после =:
      </Section.text>
      <Section.code>
        {`
function showMessage(from, text = "текст не добавлен") {
  alert( from + ": " + text );
}

showMessage("Аня"); // Аня: текст не добавлен`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Возврат значения
      </Section.title>
      <Section.text>
        Функция может вернуть результат, который будет передан в вызвавший её код.
        Простейшим примером может служить функция сложения двух чисел:
      </Section.text>
      <Section.code>
        {`
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3`}
      </Section.code>
      <Section.text>
        Директива return может находиться в любом месте тела функции.
        Как только выполнение доходит до этого места, функция останавливается, и значение
        возвращается в вызвавший её код (присваивается переменной result выше).
        Вызовов return может быть несколько, например:
      </Section.text>
      <Section.code>
        {`
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Проходи');
  }
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
  alert( 'Все окей' );
} else {
  alert( 'Все не окей' );
}`}
      </Section.code>
      <Section.text>
        Возможно использовать return и без значения.
        Это приведёт к немедленному выходу из функции.
      </Section.text>
      <Section.code>
        {`
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Вам показывается кино" ); // (*)
  // ...
}`}
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
        Перепишите функцию, используя оператор '?' или '||'
      </Section.text>
      <Section.text>
        Следующая функция возвращает true,
        если параметр age больше 18.
        В ином случае она задаёт вопрос confirm и возвращает его результат.
      </Section.text>
      <Section.code>
        {`
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}`}
      </Section.code>
      <Section.text>
        Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.text>
        Используя оператор ?
      </Section.text>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.text>
        Используя оператор ||
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.text>
        Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
      </Section.text>
      <Section.code>
        {`
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1`}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.text>
        Напишите функцию pow(x,n), которая возвращает x в степени n.
        Иначе говоря, умножает x на себя n раз и возвращает результат.
      </Section.text>
      <Section.code>
        {`
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Задание 3
      </Section.title>
      <Section.text>
        Создайте страницу, которая запрашивает параметры,
        а затем выводит результат функции из задания 2.
      </Section.text>
    </Section>
  </>
);

export default Functions;
