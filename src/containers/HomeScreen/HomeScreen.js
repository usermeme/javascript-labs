import React from 'react';
import { Section } from '../../components';

const HomeScreen = () => (
  <>
    <Section>
      <Section.title>
      Язык программирования JavaScript
      </Section.title>
      <Section.divider />
      <Section.text>
      Здесь вы можете изучить основы JavaScript.
      </Section.text>
      <Section.text>
      Мы будем использовать браузер в качестве окружения,
      но основное внимание будет уделяться именно самому языку JavaScript.
      </Section.text>
    </Section>
    <Section>
      <Section.title rank="2">
      Что может JavaScript в браузере?
      </Section.title>
      <Section.text>
      Современный JavaScript – это «безопасный» язык программирования.
      Он не предоставляет низкоуровневый доступ к памяти или процессору,
      потому что изначально был создан для браузеров, не требующих этого.
      </Section.text>
      <Section.text>
      Возможности JavaScript сильно зависят от окружения,
      в котором он работает. Например, Node.JS поддерживает
      функции чтения/записи произвольных файлов, выполнения сетевых запросов и т.д.
      </Section.text>
      <Section.text>
      В браузере для JavaScript доступно всё, что связано с
      манипулированием веб-страницами, взаимодействием с
      пользователем и веб-сервером.
      </Section.text>
      <Section.text>
      Например, в браузере JavaScript может:
      </Section.text>
      <Section.list>
        {[
          'Добавлять новый HTML на страницу, изменять существующее содержимое, модифицировать стили.',
          'Реагировать на действия пользователя, щелчки мыши, перемещения указателя, нажатия клавиш.',
          'Отправлять сетевые запросы на удалённые сервера, скачивать и загружать файлы (технологии AJAX и COMET).',
          'Получать и устанавливать куки, задавать вопросы посетителю, показывать сообщения.',
          'Запоминать данные на стороне клиента («local storage»).'
        ]}
      </Section.list>
      <Section.divider />
      <Section.title rank="2">
      Чего НЕ может JavaScript в браузере?
      </Section.title>
      <Section.text>
      Возможности JavaScript в браузере ограничены ради безопасности пользователя.
      Цель заключается в предотвращении доступа недобросовестной
      веб-страницы к личной информации или нанесения ущерба данным пользователя.
      </Section.text>
      <Section.text>
      Примеры таких ограничений включают в себя:
      </Section.text>
      <Section.list>
        {[
          'JavaScript на веб-странице не может читать/записывать произвольные файлы на жёстком диске, копировать их или запускать программы. Он не имеет прямого доступа к системным функциям ОС.',
          'Различные окна/вкладки не знают друг о друге. Иногда одно окно, используя JavaScript, открывает другое окно. Но даже в этом случае JavaScript с одной страницы не имеет доступа к другой, если они пришли с разных сайтов (с другого домена, протокола или порта).',
          'JavaScript может легко взаимодействовать с сервером, с которого пришла текущая страница. Но его способность получать данные с других сайтов/доменов ограничена. Хотя это возможно, требуется явное согласие (выраженное в заголовках HTTP) с удалённой стороной. Опять же, это ограничение безопасности.'
        ]}
      </Section.list>
      <Section.title rank="4">
        Подготовил студент группы 10903516 Янкович Роман
      </Section.title>
    </Section>
  </>
);
export default HomeScreen;
