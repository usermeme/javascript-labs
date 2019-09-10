import React from 'react';

import { Section } from '../components';

const Strings = () => (
  <>
    <Section>
      <Section.title>
        Строки
      </Section.title>
      <Section.divider />
      <Section.title rank="2">
        Кавычки
      </Section.title>
      <Section.text>
        В JavaScript есть разные типы кавычек.
        Строку можно создать с помощью одинарных, двойных либо обратных кавычек:
      </Section.text>
      <Section.code>
        {`
let single = 'single-quoted';
let double = "double-quoted";

let backticks = \`backticks\`;`}
      </Section.code>
      <Section.text>
        {'Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}:'}
      </Section.text>
      <Section.code>
        {`
function sum(a, b) {
  return a + b;
}

alert(\`1 + 2 = \${sum(1, 2)}.\`); // 1 + 2 = 3.`}
      </Section.code>
      <Section.text>
        Ещё одно преимущество обратных кавычек — они могут
        занимать более одной строки, вот так:
      </Section.text>
      <Section.code>
        {`
let guestList = \`Guests:
* John
* Pete
* Mary
\`;

alert(guestList); // список гостей, состоящий из нескольких строк`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Длина строки
      </Section.title>
      <Section.text>
        Свойство length содержит длину строки:
      </Section.text>
      <Section.code>
        {`alert( \`My\\n\`.length ); // 3`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Доступ к символам
      </Section.title>
      <Section.text>
        Получить символ, который занимает позицию pos,
        можно с помощью квадратных скобок: [pos]. Также можно использовать
        метод charAt: str.charAt(pos). Первый символ занимает нулевую позицию:
      </Section.text>
      <Section.code>
        {`
let str = \`Hello\`;

// получаем первый символ
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// получаем последний символ
alert( str[str.length - 1] ); // o`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Строки неизменяемы
      </Section.title>
      <Section.text>
        Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине
        и заменить его. Как только строка создана — она такая навсегда.
      </Section.text>
      <Section.code>
        {`
let str = 'Hi';

str[0] = 'h'; // ошибка
alert( str[0] ); // не работает`}
      </Section.code>
      <Section.text>
        Можно создать новую строку и записать её в ту
        же самую переменную вместо старой.
      </Section.text>
      <Section.code>
        {`
let str = 'Hi';

str = 'h' + str[1]; // заменяем строку

alert( str ); // hi`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Изменение регистра
      </Section.title>
      <Section.text>
        Методы toLowerCase() и toUpperCase() меняют регистр символов:
      </Section.text>
      <Section.code>
        {`
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

//Если мы захотим перевести в нижний регистр какой-то конкретный символ:
alert( 'Interface'[0].toLowerCase() ); // 'i'`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Поиск подстроки
      </Section.title>
      <Section.text>
        Существует несколько способов поиска подстроки.
      </Section.text>
      <Section.title rank="3">
        str.indexOf
      </Section.title>
      <Section.text>
        Первый метод — str.indexOf(substr, pos).
        Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию,
        на которой располагается совпадение, либо -1 при отсутствии совпадений.
      </Section.text>
      <Section.code>
        {`
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)`}
      </Section.code>
      <Section.text>
        Необязательный второй аргумент позволяет начать
        поиск с определённой позиции.
        Например, первое вхождение "id" — на позиции 1.
        Для того, чтобы найти следующее, начнём поиск с позиции 2:
      </Section.text>
      <Section.code>
        {`
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12`}
      </Section.code>
      <Section.title rank="3">
        includes, startsWith, endsWith
      </Section.title>
      <Section.text>
        Более современный метод str.includes(substr, pos) возвращает true,
        если в строке str есть подстрока substr, либо false, если нет.
        Это — правильный выбор, если нам необходимо проверить, есть
        ли совпадение, но позиция не нужна:
      </Section.text>
      <Section.code>
        {`
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false`}
      </Section.code>
      <Section.text>
        Необязательный второй аргумент str.includes позволяет
        начать поиск с определённой позиции:
      </Section.text>
      <Section.code>
        {`
alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3`}
      </Section.code>
      <Section.text>
        Методы str.startsWith и str.endsWith проверяют, соответственно,
        начинается ли и заканчивается ли строка определённой строкой:
      </Section.text>
      <Section.code>
        {`
alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Получение подстроки
      </Section.title>
      <Section.text>
        В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.
      </Section.text>
      <Section.title rank="3">
        str.slice(start [, end])
      </Section.title>
      <Section.text>
        Возвращает часть строки от start до (не включая) end.
      </Section.text>
      <Section.code>
        {`
let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );`}
      </Section.code>
      <Section.text>
        Если аргумент end отсутствует, slice возвращает символы до конца строки:
      </Section.text>
      <Section.text>
        Также для start/end можно задавать отрицательные значения. Это означает,
        что позиция определена как заданное количество символов с конца строки:
      </Section.text>
      <Section.title rank="3">
      str.substring(start [, end])
      </Section.title>
      <Section.text>
        Возвращает часть строки между start и end.
      </Section.text>
      <Section.text>
        Это — почти то же, что и slice, но можно задавать start больше end.
      </Section.text>
      <Section.code>
        {`
let str = "stringify";

// для substring эти два примера — одинаковы
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// …но не для slice:
alert( str.slice(2, 6) ); // "ring" (то же самое)
alert( str.slice(6, 2) ); // "" (пустая строка)`}
      </Section.code>
      <Section.title rank="3">
        str.substr(start [, length])
      </Section.title>
      <Section.text>
        Возвращает часть строки от start длины length.
      </Section.text>
      <Section.text>
        В противоположность предыдущим методам, этот
        позволяет указать длину вместо конечной позиции:
      </Section.text>
      <Section.code>
        {`
let str = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
alert( str.substr(2, 4) );`}
      </Section.code>
      <Section.text>
        Значение первого аргумента может быть отрицательным,
        тогда позиция определяется с конца:
      </Section.text>
      <Section.code>
        {`
let str = "stringify";
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
alert( str.substr(-4, 2) );`}
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
        Напишите функцию ucFirst(str), возвращающую строку
        str с заглавным первым символом.
      </Section.text>
      <Section.code>
        {'ucFirst("вася") == "Вася";'}
      </Section.code>
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.text>
        Напишите функцию checkSpam(str),
        возвращающую true, если str содержит нужные слова, а иначе false.
      </Section.text>
      <Section.text>
        Функция должна быть нечувствительна к регистру:
      </Section.text>
      <Section.code>
        {`
checkSpam('hello world') == true
checkSpam('how are you') == true
checkSpam("lol :)") == false`}
      </Section.code>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.text>
        Слова: lol, hello
      </Section.text>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.text>
        Слова: world, you
      </Section.text>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.text>
        Слова: are, lol
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Задание 3
      </Section.title>
      <Section.text>
        Создайте функцию truncate(str, maxlength), которая
        проверяет длину строки str и, если она превосходит maxlength,
        заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
      </Section.text>
      <Section.text>
        Результатом функции должна быть та же строка,
        если усечение не требуется, либо, если необходимо, усечённая строка.
      </Section.text>
      <Section.code>
        {`
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"`}
      </Section.code>
    </Section>
  </>
);

export default Strings;