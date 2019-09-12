import React from 'react';

import { Section } from '../components';

const Objects = () => (
  <>
    <Section>
      <Section.title>
        Объекты
      </Section.title>
      <Section.text>
        <b>Цель:</b>
        научиться работать с объектами в JavaScript,
        изучить основные понятия и методы объектов.
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
        Как мы знаем из главы Типы данных, в JavaScript существует
        семь типов данных. Шесть из них называются «примитивными», так как
        содержат только одно значение (будь то строка, число или что-то другое).
      </Section.text>
      <Section.text>
        Объекты же используются для хранения коллекций
        различных значений и более сложных сущностей.
        В JavaScript объекты используются очень часто, это одна из основ языка.
        Поэтому мы должны понять их, прежде чем углубляться куда-либо ещё.
      </Section.text>
      <Section.text>
        {'Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств. Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»), а значение может быть чем угодно.'}
      </Section.text>
      <Section.text>
        Мы можем представить объект в виде ящика с подписанными
        папками. Каждый элемент данных хранится в своей папке, на которой
        написан ключ. По ключу папку легко найти,
        удалить или добавить в неё что-либо.
      </Section.text>
      <Section.text>
        Как мы знаем из главы Типы данных, в JavaScript существует семь
        типов данных. Шесть из них называются «примитивными», так как
        содержат только одно значение (будь то строка, число или что-то другое).
      </Section.text>
      <Section.code>
        {`
let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"`}
      </Section.code>
      <Section.text>
        {'Обычно используют вариант с фигурными скобками {...}. Такое объявление называют литералом объекта или литеральной нотацией.'}
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Литералы и свойства
      </Section.title>
      <Section.text>
        {'При использовании литерального синтаксиса {...} мы сразу можем поместить в объект несколько свойств в виде пар «ключ: значение»:'}
      </Section.text>
      <Section.code>
        {`
let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};`}
      </Section.code>
      <Section.text>
        Свойства объекта также иногда называют полями объекта.
        У каждого свойства есть ключ (также называемый «имя»
        или «идентификатор»). После имени свойства следует двоеточие
        ":", и затем указывается значение свойства.
        Если в объекте несколько свойств, то они перечисляются через запятую.
      </Section.text>
      <Section.text>
        Для удаления свойства мы можем использовать оператор delete:
      </Section.text>
      <Section.code>
        {'delete user.age;'}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Квадратные скобки
      </Section.title>
      <Section.text>
        Для свойств, имена которых состоят из нескольких слов,
        доступ к значению «через точку» не работает:
      </Section.text>
      <Section.code>
        {`
// это вызовет синтаксическую ошибку
user.likes birds = true`}
      </Section.code>
      <Section.text>
        Так происходит, потому что точка требует, чтобы ключ
        был именован по правилам именования переменных. То есть не имел пробелов,
        не начинался с цифры и не содержал специальные символы, кроме $ и _.
        Для таких случаев существует альтернативный способ доступа к
        свойствам через квадратные скобки. Такой способ сработает с любым именем свойства:
      </Section.text>
      <Section.code>
        {`
let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];`}
      </Section.code>
      <Section.text>
        Квадратные скобки также позволяют обратиться к свойству,
        имя которого может быть результатом выражения.
        Например, имя свойства может храниться в переменной:
      </Section.text>
      <Section.code>
        {`
let key = "likes birds";

// то же самое, что и user["likes birds"] = true;
user[key] = true;`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Вычисляемые свойства
      </Section.title>
      <Section.text>
        Мы можем использовать квадратные скобки в литеральной нотации для
        создания вычисляемого свойства.
      </Section.text>
      <Section.code>
        {`
let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert( bag.apple ); // 5, если fruit="apple"`}
      </Section.code>
      <Section.text>
        {`
        Смысл вычисляемого свойства прост: запись [fruit] означает,
        что имя свойства необходимо взять из переменной fruit.
        И если посетитель введёт слово "apple", то в объекте bag
        теперь будет лежать свойство {apple: 5}.
        По сути, пример выше работает так же, как и следующий пример:
        `}
      </Section.text>
      <Section.code>
        {`
let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {};

// имя свойства будет взято из переменной fruit
bag[fruit] = 5;`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Проверка существования свойства
      </Section.title>
      <Section.text>
        Особенность объектов в том, что можно получить
        доступ к любому свойству. Даже если свойства не
        существует – ошибки не будет! При обращении к свойству,
        которого нет, возвращается undefined. Это позволяет
        просто проверить существование свойства – сравнением его с undefined:
      </Section.text>
      <Section.code>
        {`
let user = {};

alert( user.noSuchProperty === undefined ); // true означает "свойства нет"`}
      </Section.code>
      <Section.text>
        Также существует специальный оператор "in" для проверки
        существования свойства в объекте.
      </Section.text>
      <Section.code>
        {`
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Цикл «for…in»
      </Section.title>
      <Section.text>
        Для перебора всех свойств объекта
        используется цикл for..in. Этот цикл
        отличается от изученного ранее цикла for(;;).
      </Section.text>
      <Section.code>
        {`
for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Копирование по ссылке
      </Section.title>
      <Section.text>
        Одним из фундаментальных отличий объектов от примитивных
        типов данных является то, что они хранятся и копируются «по ссылке».
        Примитивные типы: строки, числа, логические значения
        – присваиваются и копируются «по значению».
      </Section.text>
      <Section.code>
        {`
let message = "Hello!";
let phrase = message;

let user = { name: "John" };
let admin = user; // копируется ссылка`}
      </Section.code>
      <Section.text>
        Мы можем использовать любую из переменных для доступа
        к ящику и изменения его содержимого:
      </Section.text>
      <Section.code>
        {`
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // изменено по ссылке из переменной "admin"

alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Сравнение объектов
      </Section.title>
      <Section.text>
        Два объекта равны только в том случае, если это один и тот же объект.
      </Section.text>
      <Section.code>
        {`
  let a = {};
  let b = a; // копирование по ссылке
  
  alert( a == b ); // true, обе переменные ссылаются на один и тот же объект
  alert( a === b ); // true`}
      </Section.code>
      <Section.text>
        В примере ниже два разных объекта не равны, хотя и оба пусты:
      </Section.text>
      <Section.code>
        {`
let a = {};
let b = {}; // два независимых объекта

alert( a == b ); // false`}
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
        Напишите функцию isEmpty(obj), которая возвращает true,
        если у объекта нет свойств, иначе false.
      </Section.text>
      <Section.code>
        {`
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.text>
        Напишите код для суммирования всех зарплат и сохраните
        результат в переменной sum. Если объект salaries пуст,
        то результат должен быть 0.
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.code>
        {`
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}`}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.code>
        {`
let salaries = {}`}
      </Section.code>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.code>
        {`
let salaries = {
  John: 200,
  Ann: 160,
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Задание 3
      </Section.title>
      <Section.text>
        Создайте функцию multiplyNumeric(obj), которая умножает все
        числовые свойства объекта obj на заданое число.
      </Section.text>
      <Section.code>
        {`
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции, если число = 2
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};`}
      </Section.code>
      <Section.title rank="3">
        Варинат 1
      </Section.title>
      <Section.text>
        Число = 2
      </Section.text>
      <Section.title rank="3">
        Варинат 2
      </Section.title>
      <Section.text>
        Число = 3
      </Section.text>
      <Section.title rank="3">
        Варинат 3
      </Section.title>
      <Section.text>
        Число = 5
      </Section.text>
    </Section>
  </>
);

export default Objects;
