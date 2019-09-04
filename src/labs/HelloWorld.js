import React from 'react';

import { Section } from '../components';

const HelloWorld = () => (
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
  </Section>
);

export default HelloWorld;
