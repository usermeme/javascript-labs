import React from 'react';

import { Section } from '../components';

const HelloWorld = () => (
  <>
    <Section>
      <Section.title>
        Привет, мир!
      </Section.title>
      <Section.text>
        В этой части учебника мы изучаем собственно JavaScript, сам язык.
      </Section.text>
      <Section.text>
        Но нам нужна рабочая среда для запуска наших скриптов, и, поскольку это онлайн-книга,
        то браузер будет хорошим выбором. В этой главе мы сократим
        количество специфичных для браузера команд
        (например, alert) до минимума, чтобы вы не тратили на них время,
        если планируете сосредоточиться на другой среде(например, Node.js).
        А на использовании JavaScript в браузере мы сосредоточимся в следующей части.
      </Section.text>
      <Section.text>
        Итак, сначала давайте посмотрим, как выполнить скрипт на странице.
        Для серверных сред (например, Node.js),
        вы можете выполнить скрипт с помощью команды
        типа &quot;node my.js&quot;. Для браузера всё немного иначе.
      </Section.text>
      <Section.title rank="2">
        {'Тег <script>'}
      </Section.title>
      <Section.text>
        {'Программы на JavaScript могут быть вставлены в любое место HTML-документа с помощью тега <script>.'}
      </Section.text>
      <Section.text>
        Создайте файл index.html и вставьте следующий текст:
      </Section.text>
      <Section.code language="html">
        {`
<!DOCTYPE HTML>
<html>
<body>
  <p>Перед скриптом...</p>
  <script>
    alert( 'Привет, мир!' );
  </script>
  <p>...После скрипта.</p>
</body>
</html>`}
      </Section.code>
      <Section.text>
        {'Тег <script> содержит JavaScript-код, который автоматически выполнится, когда браузер его обработает.'}
      </Section.text>
      <Section.title rank="2">
        Внешние скрипты
      </Section.title>
      <Section.text>
        Если у вас много JavaScript-кода, вы можете поместить его в отдельный файл.
      </Section.text>
      <Section.text>
        Файлы скрипта можно подключить к HTML с помощью атрибута src:
      </Section.text>
      <Section.code language="html">
        {`
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…`}
      </Section.code>
      <Section.divider />
      <Section.title rank="3">
        На заметку:
      </Section.title>
      <Section.text>
        Как правило, только простейшие скрипты помещаются в HTML.
        Более сложные выделяются в отдельные файлы.
        Польза от отдельных файлов в том, что браузер загрузит
        скрипт отдельно и сможет хранить его в кеше.
        Другие страницы, которые подключают тот же скрипт,
        смогут брать его из кэша вместо повторной загрузки
        его из сети. И таким образом файл будет загружаться с сервера только один раз.
        Это сокращает расход трафика и ускоряет загрузку страниц.
      </Section.text>
      <Section.text>
        Если аттрибут src установлен, содержимое тега script будет игнорироваться.
      </Section.text>
      <Section.divider />
    </Section>
    <Section>
      <Section.title>
        Структура кода
      </Section.title>
      <Section.text>
        Начнём изучение языка с рассмотрения основных «строительных блоков» кода.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Инструкции
      </Section.title>
      <Section.text>
        Инструкции – это синтаксические конструкции и команды, которые выполняют действия.
      </Section.text>
      <Section.text>
        {'Мы уже видели инструкцию alert("Привет, мир!"), которая отображает сообщение «Привет, мир!».'}
      </Section.text>
      <Section.text>
        В нашем коде может быть столько инструкций, сколько мы захотим.
        Инструкции могут отделяться точкой с запятой.
      </Section.text>
      <Section.text>
        Например, здесь мы разделили сообщение «Привет Мир» на два вызова alert:
      </Section.text>
      <Section.code language="javascript">
        {"alert('Привет'); alert('Мир');"}
      </Section.code>
      <Section.text>
        Обычно каждую инструкцию пишут на новой строке, чтобы код было легче читать:
      </Section.text>
      <Section.code language="javascript">
        {`
alert('Привет');
alert('Мир');`}
      </Section.code>
      <Section.title rank="2">
        Комментарии
      </Section.title>
      <Section.text>
        Со временем программы становятся всё сложнее и сложнее.
        Возникает необходимость добавлять комментарии,
        которые бы описывали, что делает код и почему.
      </Section.text>
      <Section.text>
        Комментарии могут находиться в любом месте скрипта.
        Они не влияют на его выполнение, поскольку движок просто игнорирует их.
      </Section.text>
      <Section.text>
        Однострочные комментарии начинаются с двойной косой черты //.
      </Section.text>
      <Section.text>
        Часть строки после // считается комментарием.
        Такой комментарий может,
        как занимать строку целиком, так и находиться после инструкции.
      </Section.text>
      <Section.text>
        Как здесь:
      </Section.text>
      <Section.code language="javascript">
        {`
// Этот комментарий занимает всю строку
alert('Привет');

alert('Мир'); // Этот комментарий следует за инструкцией`}
      </Section.code>
    </Section>
    <Section>
      <Section.title>
        Переменные
      </Section.title>
      <Section.text>
        JavaScript-приложению обычно нужно работать с информацией. Например:
      </Section.text>
      <Section.list>
        {[
          'Интернет магазин – информация может включать продаваемые товары и корзину покупок.',
          'Чат – информация может включать пользователей, сообщения и многое другое.'
        ]}
      </Section.list>
      <Section.text>
        Переменные используются для хранения этой информации.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Переменная
      </Section.title>
      <Section.text>
        Переменная – это «именованное хранилище» для данных.
        Мы можем использовать переменные для хранения товаров, посетителей и других данных.
      </Section.text>
      <Section.text>
        Для создания переменной в JavaScript, используйте ключевое слово var/let/const.
      </Section.text>
      <Section.text>
        Приведённая ниже инструкция создаёт
        (другими словами: объявляет или определяет) переменную с именем «message»:
      </Section.text>
      <Section.code language="javascript">
        {`
let message;
message = 'Hello'; // сохранить строку

alert(message); // показывает содержимое переменной`}
      </Section.code>
      <Section.text>
        Для краткости можно совместить объявление переменной и запись данных в одну строку:
      </Section.text>
      <Section.code language="javascript">
        {`
let message = 'Hello!'; // определяем переменную и присваиваем ей значение

alert(message); // Hello!`}
      </Section.code>
      <Section.divider />
      <Section.title rank="3">
        var вместо let
      </Section.title>
      <Section.text>
        В старых скриптах вы также можете найти другое ключевое слово: var вместо let:
      </Section.text>
      <Section.code language="javascript">
        {'var message = \'Hello\';'}
      </Section.code>
      <Section.text>
        Ключевое слово var – почти то же самое, что и let. Оно объявляет переменную,
        но немного по-другому, «устаревшим» способом.
        Есть тонкие различия между let и var, но они пока не имеют для нас значения.
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Имена переменных
      </Section.title>
      <Section.text>
        В JavaScript есть два ограничения, касающиеся имён переменных:
      </Section.text>
      <Section.list>
        {[
          'Имя переменной должно содержать только буквы, цифры или символы $ и _.',
          'Первый символ не должен быть цифрой.'
        ]}
      </Section.list>
      <Section.text>
        Регистр имеет значение.
        Переменные с именами apple and AppLE – это две разные переменные.
      </Section.text>
      <Section.title rank="2">
        Константы
      </Section.title>
      <Section.text>
        Чтобы объявить константную, то есть, неизменяемую переменную, используйте const вместо let:
      </Section.text>
      <Section.code language="javascript">
        {'const myBirthday = \'30.08.1998\';'}
      </Section.code>
      <Section.text>
        Переменные объявленные с помощью const, называются «константами».
        Их нельзя изменить. Попытка сделать это приведёт к ошибке:
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
      <Section.text>
        Написать скрипт, который будет выводить переменную в всплывающее окно
      </Section.text>
      <Section.title rank="3">
        Вариант 1
      </Section.title>
      <Section.code>
        {"const variables = 'hello'"}
      </Section.code>
      <Section.title rank="3">
        Вариант 2
      </Section.title>
      <Section.code>
        {"const variables = 'world'"}
      </Section.code>
      <Section.title rank="3">
        Вариант 3
      </Section.title>
      <Section.code>
        {"const variables = 'hello world'"}
      </Section.code>
      <Section.divider />
      <Section.title rank="2">
        Задание 2
      </Section.title>
      <Section.title rank="3">
        Для всех вариантов
      </Section.title>
      <Section.text>
        Создать два файла .js и подключить их к index.html.
      </Section.text>
      <Section.text>
        Каждый из файлов должен вывести по одному всплывающему окну
      </Section.text>
      <Section.divider />
      <Section.title rank="2">
        Задание 3
      </Section.title>
      <Section.title rank="3">
        Для всех вариантов
      </Section.title>
      <Section.list>
        {[
          'Объявите две переменные: admin и name.',
          'Запишите строку "Джон" в переменную name.',
          'Скопируйте значение из переменной name в admin.',
          'Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).'
        ]}
      </Section.list>
      <Section.divider />
    </Section>
  </>
);

export default HelloWorld;
