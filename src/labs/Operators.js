import React from 'react';

import { Section } from '../components';

const Operators = () => (
  <>
    <Section>
      <Section.title>
        Операторы
      </Section.title>
      <Section.divider />
      <Section.title rank="2">
        Термины: «унарный», «бинарный», «операнд»
      </Section.title>
      <Section.text>
        Операнд – то, к чему применяется оператор. Например,
        в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый
        операнд равен 2. Иногда их называют «аргументами» вместо «операндов».
      </Section.text>
      <Section.text>
        Унарным называется оператор, который применяется к одному операнду.
        Например, оператор унарный минус "-" меняет знак числа на противоположный:
      </Section.text>
      <Section.code>
        {`
let x = 1;

x = -x;
alert( x ); // -1, применили унарный минус`}
      </Section.code>
      <Section.text>
        Бинарным называется оператор,
        который применяется к двум операндам.
        Тот же минус существует и в бинарной форме:
      </Section.text>
      <Section.code>
        {`
let x = 1, y = 3;
alert( y - x ); // 2, бинарный минус`}
      </Section.code>
      <Section.text>
        Формально мы говорим о двух разных операторах:
        унарное отрицание (один операнд: меняет знак)
        и бинарное вычитание (два операнда: вычитает).
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Сложение строк, бинарный +
      </Section.title>
      <Section.text>
        Обычно при помощи плюса '+' складывают числа.
        Но если бинарный оператор '+'
        применить к строкам, то он их объединяет в одну:
      </Section.text>
      <Section.code>
        {`
let s = "моя" + "строка";
alert(s); // моястрока`}
      </Section.code>
      <Section.text>
        Обратите внимание, если хотя бы один
        операнд является строкой, то второй будет также преобразован к строке.
        Например:
      </Section.text>
      <Section.code>
        {`
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"`}
      </Section.code>
      <Section.text>
        Причём не важно, справа или слева находится операнд-строка.
        Правило простое: если хотя бы один из операндов является строкой,
        то второй будет также преобразован к строке.
        Тем не менее, помните, что операции выполняются слева направо.
        Если перед строкой идут два числа, то числа будут сложены
        перед преобразованием в строку:
      </Section.text>
      <Section.code>
        {'alert(2 + 2 + \'1\' ); // будет "41", а не "221"'}
      </Section.code>
      <Section.text>
        Сложение и преобразование строк – это особенность бинарного
        плюса +. Другие арифметические операторы
        работают только с числами и всегда преобразуют операнды в числа.
        Например, вычитание и деление:
      </Section.text>
      <Section.code>
        {`
alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Преобразование к числу, унарный плюс +
      </Section.title>
      <Section.text>
        Плюс + существует в двух формах: бинарной,
        которую мы использовали выше, и унарной.
        Унарный, то есть применённый к одному значению,
        плюс + ничего не делает с числами. Но если операнд не число,
        унарный плюс преобразует его в число.
        Например:
      </Section.text>
      <Section.code>
        {`
// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Преобразует не-числа в число
alert( +true ); // 1
alert( +"" );   // 0`}
      </Section.code>
      <Section.text>
        На самом деле это то же самое, что и Number(...), только короче.
        Необходимость преобразовывать строки в числа возникает очень
        часто. Например, обычно значения полей HTML-формы – это строки.
        А что, если их нужно, к примеру, сложить?
        Бинарный плюс сложит их как строки,
        поэтому используем унарный плюс, чтобы преобразовать к числу:
      </Section.text>
      <Section.code>
        {`
let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Приоритет операторов
      </Section.title>
      <Section.text>
        В JavaScript много операторов. Каждый оператор имеет
        соответствующий номер приоритета. Тот, у кого это число больше –
        выполнится раньше. Если приоритет одинаковый, то порядок выполнения – слева направо.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Присваивание
      </Section.title>
      <Section.text>
        Давайте отметим, что в таблице приоритетов
        также есть оператор присваивания =.
        У него один из самых низких приоритетов: 3.
        Именно поэтому, когда переменной что-либо присваивают,
        например, x = 2 * 2 + 1, то сначала выполнится
        арифметика, а уже затем произойдёт присваивание =.
      </Section.text>
      <Section.code>
        {`
let x = 2 * 2 + 1;

alert( x ); // 5`}
      </Section.code>
      <Section.text>
        Возможно присваивание по цепочке:
      </Section.text>
      <Section.code>
        {`
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4`}
      </Section.code>
      <Section.title rank="3">
        Оператор "=" возвращает значение
      </Section.title>
      <Section.text>
        Все операторы возвращают значение. Для некоторых это очевидно,
        например сложение + или умножение *.
        Но и оператор присваивания не является исключением.
        Вызов x = value записывает value в x и возвращает его.
        Благодаря этому присваивание можно использовать
        как часть более сложного выражения:
      </Section.text>
      <Section.code>
        {`
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0`}
      </Section.code>
      <Section.text>
        В примере выше результатом (a = b + 1) будет значение,
        которое присваивается в a (то есть 3).
        Потом оно используется для дальнейших вычислений.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Остаток от деления %
      </Section.title>
      <Section.text>
        Оператор взятия остатка %, несмотря на обозначение,
        никакого отношения к процентам не имеет.
        Его результат a % b – это остаток от деления a на b.
        Например:
      </Section.text>
      <Section.code>
        {`
  alert( 5 % 2 ); // 1, остаток от деления 5 на 2
  alert( 8 % 3 ); // 2, остаток от деления 8 на 3
  alert( 6 % 3 ); // 0, остаток от деления 6 на 3`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Возведение в степень **
      </Section.title>
      <Section.text>
        Оператор возведения в степень ** недавно добавили в язык.
        Для натурального числа b результат a ** b равен a,
        умноженному на само себя b раз.
        Например:
      </Section.text>
      <Section.code>
        {`
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Инкремент/декремент
      </Section.title>
      <Section.text>
        Одной из наиболее частых операций в JavaScript,
        как и во многих других языках программирования,
        является увеличение или уменьшение переменной на единицу.
        Для этого существуют даже специальные операторы:
      </Section.text>
      <Section.title rank="3">
        Инкремент ++ увеличивает на 1:
      </Section.title>
      <Section.code>
        {`
let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
alert( counter ); // 3`}
      </Section.code>
      <Section.title rank="3">
        Декремент -- уменьшает на 1:
      </Section.title>
      <Section.code>
        {`
let counter = 2;
counter--;        // работает как counter = counter - 1, просто запись короче
alert( counter ); // 1`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Побитовые операторы
      </Section.title>
      <Section.text>
        Побитовые операторы работают с 32-разрядными целыми числами
        (при необходимости приводят к ним),
        на уровне их внутреннего двоичного представления.
        Эти операторы не являются чем-то специфичным для JavaScript,
        они поддерживаются в большинстве языков программирования.
        Поддерживаются следующие побитовые операторы:
      </Section.text>
      <Section.list>
        {[
          'AND(и) ( & )',
          'OR(или) ( | )',
          'XOR(побитовое исключающее или) ( ^ )',
          'NOT(не) ( ~ )',
          'LEFT SHIFT(левый сдвиг) ( << )',
          'RIGHT SHIFT(правый сдвиг) ( >> )',
          'ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )'
        ]}
      </Section.list>
      <Section.divider />
      <Section.title rank="2">
        Оператор запятая
      </Section.title>
      <Section.text>
        Оператор «запятая» , редко используется и является
        одним из самых необычных. Иногда он используется
        для написания более короткого кода,
        поэтому нам нужно знать его, чтобы понимать, что при этом происходит.
        Оператор запятая предоставляет нам возможность
        вычислять несколько выражений, разделяя их
        запятой ,. Каждое выражение выполняется,
        но возвращается результат только последнего.
        Например:
      </Section.text>
      <Section.code>
        {`
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (результат 3 + 4)`}
      </Section.code>
      <Section.text>
        Зачем нам оператор, который отбрасывает
        всё, кроме последнего выражения?
        Иногда его используют в составе более сложных
        конструкций, чтобы сделать несколько действий в одной строке.
        Например:
      </Section.text>
      <Section.code>
        {`
// три операции в одной строке
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  ...
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
        Чему будут равны переменные a, b, c и d в примере ниже?
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.code>
        {`
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?`}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.code>
        {`
let a = 5, b = 2;

let c = ++a; // ?
let d = b++; // ?`}
      </Section.code>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.code>
        {`
let a = 6, b = 1;

let c = ++a; // ?
let d = b++; // ?`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.text>
        Чему будут равны переменные a и x в примере ниже?
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.code>
        {`
let a = 2;

let x = 1 + (a *= 2);`}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.code>
        {`
let a = 1;

let x = 2 + (a *= 6);`}
      </Section.code>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.code>
        {`
let a = 9;

let x = 0 + (a *= 1);`}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Задание 3
      </Section.title>
      <Section.text>
        Каким будет результат этих выражений?
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.code>
        {`
5 > 4
"ананас" > "яблоко"`}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.code>
        {`
undefined == null
"2" > "12"`}
      </Section.code>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.code>
        {`
null == "0"
null === +"0"`}
      </Section.code>
    </Section>
  </>
);

export default Operators;
