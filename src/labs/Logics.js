import React from 'react'

import { Section } from '../components';

const Logics = () => (
  <>
    <Section>
      <Section.title>
        Логические операторы
      </Section.title>
      <Section.text>
        {'В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ). Несмотря на своё название, данные операторы могут применяться к значениям любых типов. Полученные результаты также могут иметь различный тип.'}
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        || (ИЛИ)
      </Section.title>
      <Section.text>
        Оператор «ИЛИ» выглядит как двойной символ вертикальной черты:
      </Section.text>
      <Section.code>
        {'result = a || b;'}
      </Section.code>
      <Section.text>
        {'Традиционно в программировании ИЛИ предназначено только для манипулирования булевыми значениями: в случае, если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false.'}
      </Section.text>
      <Section.text>
        {'В JavaScript, как мы увидим далее, этот оператор работает несколько иным образом. Но давайте сперва посмотрим, что происходит с булевыми значениями.'}
      </Section.text>
      <Section.text>
        {'Существует всего четыре возможные логические комбинации:'}
      </Section.text>
      <Section.code>
        {`
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false`}
      </Section.code>
      <Section.text>
        Как мы можем наблюдать, результат операций всегда равен true,
        за исключением случая, когда оба аргумента false.
        Если значение не логического типа, то оно к нему приводится в целях вычислений.
        Например, число 1 будет воспринято как true, а 0 – как false:
      </Section.text>
      <Section.code>
        {`
if (1 || 0) { // работает как if( true || false )
  alert( 'truthy!' );
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        ИЛИ «||» находит первое истинное значение
      </Section.title>
      <Section.text>
        Описанная выше логика соответствует традиционной.
        Теперь давайте поработаем с «дополнительными» возможностями JavaScript.
        Расширенный алгоритм работает следующим образом.
        При выполнении ИЛИ || с несколькими значениями:
      </Section.text>
      <Section.code>
        {'result = value1 || value2 || value3;'}
      </Section.code>
      <Section.text>
        Оператор || выполняет следующие действия:
      </Section.text>
      <Section.list>
        {[
          'Вычисляет операнды слева направо.',
          'Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.',
          'Если все операнды являются ложными (false), возвращает последний из них.'
        ]}
      </Section.list>
      <Section.text>
        Значение возвращается в исходном виде, без преобразования.
        Другими словами, цепочка ИЛИ "||" возвращает первое истинное
        значение или последнее, если такое значение не найдено.
        Например:
      </Section.text>
      <Section.code>
        {`
alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        {'&& (И)'}
      </Section.title>
      <Section.text>
        {'Оператор И пишется как два амперсанда &&:'}
      </Section.text>
      <Section.code>
        {'result = a && b;'}
      </Section.code>
      <Section.text>
        {'В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false:'}
      </Section.text>
      <Section.code>
        {`
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false`}
      </Section.code>
      <Section.text>
        Пример с if:
      </Section.text>
      <Section.code>
        {`
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
alert( 'The time is 12:30' );
}`}
      </Section.code>
      <Section.text>
        Как и в случае с ИЛИ, любое значение допускается в качестве операнда И:
      </Section.text>
      <Section.code>
        {`
if (1 && 0) { // вычисляется как true && false
  alert( "won't work, because the result is falsy" );
}`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        {'И «&&» находит первое ложное значение'}
      </Section.title>
      <Section.text>
        При нескольких подряд операторах И:
      </Section.text>
      <Section.code>
        {'result = value1 && value2 && value3;'}
      </Section.code>
      <Section.text>
        {'Оператор && выполняет следующие действия:'}
      </Section.text>
      <Section.list>
        {[
          'Вычисляет операнды слева направо.',
          'Каждый операнд преобразует в логическое значение. Если результат false, останавливается и возвращает исходное значение этого операнда.',
          'Если все операнды были истинными, возвращается последний.'
        ]}
      </Section.list>
      <Section.code>
        {`
// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        ! (НЕ)
      </Section.title>
      <Section.text>
        Оператор НЕ представлен восклицательным знаком !.
      </Section.text>
      <Section.code>
        {'result = !value;'}
      </Section.code>
      <Section.text>
        Оператор принимает один аргумент и выполняет следующие действия:
      </Section.text>
      <Section.list>
        {[
          'Сначала приводит аргумент к логическому типу true/false.',
          'Затем возвращает противоположное значение.'
        ]}
      </Section.list>
      <Section.text>
        Например:
      </Section.text>
      <Section.code>
        {`
alert( !true ); // false
alert( !0 ); // true`}
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
        Напишите условие if для проверки, что переменная age
        находится в диапазоне между 14 и 90 включительно.
      </Section.text>
      <Section.text>
        «Включительно» означает, что значение переменной age может быть равно 14 или 90.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.text>
        Напишите код, который будет спрашивать логин с помощью prompt.
      </Section.text>
      <Section.text>
        Если посетитель вводит «Админ», то prompt запрашивает пароль,
        если ничего не введено или нажата клавиша Esc –
        показать «Отменено», в противном случае отобразить «Я вас не знаю».
      </Section.text>
      <Section.text>
        Пароль проверять так:
      </Section.text>
      <Section.list>
        {[
          'Если введён пароль «Я главный», то выводить «Здравствуйте!»,',
          'Иначе – «Неверный пароль»,',
          'При отмене – «Отменено».'
        ]}
      </Section.list>
      <Section.divider />
    </Section>
  </>
);

export default Logics;