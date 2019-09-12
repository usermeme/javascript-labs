import React from 'react';

import { Section } from '../components';

const Variables = () => (
  <>
    <Section>
      <Section.title>
        Типы данных
      </Section.title>
      <Section.text>
        <b>Цель:</b>
        научиться создавать переменные,
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
        Переменная в JavaScript может содержать любые данные.
        В один момент там может быть строка, а в другой – число:
      </Section.text>
      <Section.code>
        {`
  // Не будет ошибкой
  let message = "hello";
  message = 123456;`}
      </Section.code>
      <Section.text>
        Языки программирования,
        в которых такое возможно, называются «динамически типизированными».
        Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.
      </Section.text>
      <Section.text>
        Есть семь основных типов данных в JavaScript. В этой главе мы рассмотрим
        их в общем, а в следующих главах поговорим подробнее о каждом.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Число
      </Section.title>
      <Section.code>
        {`
let n = 123;
n = 12.345;`}
      </Section.code>
      <Section.text>
        Числовой тип данных (number)
        представляет как целочисленные значения, так и числа с плавающей точкой.
      </Section.text>
      <Section.text>
        Существует множество операций для чисел, например,
        умножение *, деление /, сложение +, вычитание - и так далее.
      </Section.text>
      <Section.text>
        Кроме обычных чисел, существуют так называемые «специальные
        числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.
      </Section.text>
      <Section.text>
        Infinity представляет собой математическую бесконечность ∞.
        Это особое значение, которое больше любого числа.
      </Section.text>
      <Section.text>
        NaN означает вычислительную ошибку.
        Это результат неправильной или неопределённой математической операции, например:
      </Section.text>
      <Section.title rank="3">
        Математические операции – безопасны
      </Section.title>
      <Section.text>
        Математические операции в JavaScript «безопасны».
        Мы можем делать что угодно: делить
        на ноль, обращаться со строками как с числами и т.д.
        Скрипт никогда не остановится с фатальной ошибкой (не «умрёт»).
        В худшем случае мы получим NaN как результат выполнения.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Строка
      </Section.title>
      <Section.text>
        Строка (string) в JavaScript должна быть заключена в кавычки.
      </Section.text>
      <Section.code>
        {`
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = \`Обратные кавычки позволяют встраивать переменные \${str}\`;`}
      </Section.code>
      <Section.text>
        Двойные или одинарные кавычки являются «простыми», между ними нет разницы в JavaScript.
      </Section.text>
      <Section.text>
        {`Обратные кавычки же имеют «расширенный функционал».
        Они позволяют нам встраивать выражения в строку, заключая их в \${…}. Например:`}
      </Section.text>
      <Section.code>
        {`
let name = "Иван";

// Вставим переменную
alert( \`Привет, \${name}!\` ); // Привет, Иван!

// Вставим выражение
alert( \`результат: \${1 + 2}\` ); // результат: 3`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Булевый (логический) тип
      </Section.title>
      <Section.text>
        Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).
      </Section.text>
      <Section.text>
        Такой тип, как правило, используется для хранения значений да/нет:
        true значит «да, правильно», а false значит «нет, не правильно».
      </Section.text>
      <Section.text>
        Например:
      </Section.text>
      <Section.code>
        {`
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено`}
      </Section.code>
      <Section.text>
        Булевые значения также могут быть результатом сравнений:
      </Section.text>
      <Section.code>
        {`
let isGreater = 4 > 1;

alert( isGreater ); // true (результатом сравнения будет "да")`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Значение «null»
      </Section.title>
      <Section.text>
        Специальное значение null не относится ни к одному из типов, описанных выше.
      </Section.text>
      <Section.text>
        Оно формирует отдельный тип, который содержит только значение null:
      </Section.text>
      <Section.code>
        {'let age = null;'}
      </Section.code>
      <Section.text>
        В JavaScript null не является «ссылкой на несуществующий объект»
        или «нулевым указателем», как в некоторых других языках.
      </Section.text>
      <Section.text>
        Это просто специальное значение, которое
        представляет собой «ничего», «пусто» или «значение неизвестно».
      </Section.text>
      <Section.text>
        В приведённом выше коде указано, что переменная
        age неизвестна или не имеет значения по какой-то причине.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Значение «undefined»
      </Section.title>
      <Section.text>
        Специальное значение undefined также стоит
        особняком. Оно формирует тип из самого себя так же, как и null.
      </Section.text>
      <Section.text>
        Оно означает, что «значение не было присвоено».
      </Section.text>
      <Section.text>
        Если переменная объявлена, но ей не присвоено никакого
        значения, то её значением будет undefined:
      </Section.text>
      <Section.code>
        {`
let x;

alert(x); // выведет "undefined"`}
      </Section.code>
      <Section.text>
        Технически мы можем присвоить значение undefined любой переменной:
      </Section.text>
      <Section.code>
        {`
let x = 123;

x = undefined;

alert(x); // "undefined"`}
      </Section.code>
      <Section.text>
        …Но так делать не рекомендуется. Обычно null
        используется для присвоения переменной «пустого»
        или «неизвестного» значения, а undefined – для проверок,
        была ли переменная назначена.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Объекты и символы
      </Section.title>
      <Section.text>
        Тип object (объект) – особенный.
      </Section.text>
      <Section.text>
        Все остальные типы называются «примитивными»,
        потому что их значениями могут быть только простые значения
        (будь то строка или число, или что-то ещё). Объекты же используются для
        хранения коллекций данных или более сложных объектов.
        Мы разберёмся с ними позднее в главе Объекты после того, как узнаем больше о примитивах.
      </Section.text>
      <Section.text>
        Тип symbol (символ) используется для создания уникальных идентификаторов объектов.
        Мы упоминаем здесь о нём для полноты картины, изучим этот тип после объектов.
      </Section.text>
      <Section.title rank="2">
        Оператор typeof
      </Section.title>
      <Section.text>
        Оператор typeof возвращает тип аргумента.
        Это полезно, когда мы хотим обрабатывать значения
        различных типов по-разному или просто хотим сделать проверку.
      </Section.text>
      <Section.text>
        У него есть два синтаксиса:
      </Section.text>
      <Section.list>
        {[
          'Синтаксис оператора: typeof x.',
          'Синтаксис функции: typeof(x).'
        ]}
      </Section.list>
      <Section.text>
        Другими словами, он работает со скобками или без скобок.
        Результат одинаковый.
        Вызов typeof x возвращает строку с именем типа:
      </Section.text>
      <Section.code>
        {`
typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)`}
      </Section.code>
      <Section.text>
        Последние три строки нуждаются в пояснении:
      </Section.text>
      <Section.list>
        {[
          'Math – это встроенный объект, который предоставляет математические операции и константы. Здесь он служит лишь примером объекта.',
          'Результатом вызова typeof null является "object". Это неверно. Это официально признанная ошибка в typeof, сохранённая для совместимости. Конечно, null не является объектом. Это специальное значение с отдельным типом. Повторимся, это ошибка в языке.',
          'Вызов typeof alert возвращает "function", потому что alert является функцией. В JavaScript нет специального типа «функция». Функции относятся к объектному типу. Но typeof обрабатывает их особым образом, возвращая "function". Формально это неверно, но очень удобно на практике.'
        ]}
      </Section.list>
    </Section>
    <Section>
      <Section.title>
        Преобразование типов
      </Section.title>
      <Section.text>
        Чаще всего, операторы и функции автоматически приводят
        переданные им значения к нужному типу.
        Например, alert автоматически преобразует любое значение к строке. Математические
        операторы преобразуют значения к числам.
        Есть также случаи, когда нам нужно явно преобразовать значение в ожидаемый тип.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Строковое преобразование
      </Section.title>
      <Section.text>
        Строковое преобразование происходит, когда
        требуется представление чего-либо в виде строки.
        Например, alert(value) преобразует значение к строке.
        Также мы можем использовать функцию String(value),
        чтобы преобразовать значение к строке:
      </Section.text>
      <Section.code>
        {`
let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string`}
      </Section.code>
      <Section.text>
        Преобразование происходит очевидным способом. false становится
        "false", null становится "null" и т.п.
      </Section.text>
      <Section.divider />
      <Section.title>
        Численное преобразование
      </Section.title>
      <Section.text>
        Численное преобразование происходит в математических функциях и выражениях.
        Например, когда операция деления / применяется не к числу:
      </Section.text>
      <Section.code>
        {'alert( "6" / "2" ); // 3, Строки преобразуются в числа'}
      </Section.code>
      <Section.text>
        Мы можем использовать функцию Number(value), чтобы явно преобразовать value к числу:
      </Section.text>
      <Section.code>
        {`
let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number`}
      </Section.code>
      <Section.text>
        Явноe преобразование часто применяется,
        когда мы ожидаем получить число из строковых
        источников, вроде форм текстового ввода.
        Если строка не может быть явно приведена к числу,
        то результатом преобразования будет NaN. Например:
      </Section.text>
      <Section.code>
        {`
let age = Number("Любая строка вместо числа");

alert(age); // NaN, преобразование  не удалось`}
      </Section.code>
      <Section.text>
        Правила численного преобразования:
      </Section.text>
      <Section.text>
        Значение 'undefined' приобразуется в NaN;
        null в 0;
        true / false в 1 / 0;
        string - пробельные символы по краям обрезаются. Далее,
        если остаётся пустая строка,
        то 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.
      </Section.text>
      <Section.code>
        {`
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа в "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0`}
      </Section.code>
      <Section.text>
        Учтите, что null и undefined ведут себя по-разному.
        Так, null становится нулём, тогда как undefined приводится к NaN.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Логическое преобразование
      </Section.title>
      <Section.text>
        Логическое преобразование самое простое.
        Происходит в логических операторах,
        но также может быть выполнено явно с помощью функции Boolean(value).
      </Section.text>
      <Section.text>
        Правило преобразования:
      </Section.text>
      <Section.list>
        {[
          'Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined, и NaN, становятся false.',
          'Все остальные значения становятся true.'
        ]}
      </Section.list>
      <Section.text>
        Например:
      </Section.text>
      <Section.code>
        {`
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false`}
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
        Какой результат будет у выражений ниже?
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.code>
        {`
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"`}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.code>
        {`
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0`}
      </Section.code>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.code>
        {`
"-9" + 5
"-9" - 5
null + 1
undefined + 1
" " - 2`}
      </Section.code>
      <Section.divider />
      <Section.title rank="3">
        Задание 2
      </Section.title>
      <Section.text>
        Что выведет этот скрипт?
      </Section.text>
      <Section.code>
        {`
let name = "Ilya";

alert( \`hello \${1}\` ); // ?

alert( \`hello \${"name"}\` ); // ?

alert( \`hello \${name}  \` ); // ?`}
      </Section.code>
    </Section>
  </>
);

export default Variables;
