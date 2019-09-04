// @flow
import React, { memo } from 'react';
import './SideList.css';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemLink from '../ListItemLink/ListItemLink';

type SideListProps = {
  closeMenu: any,
};

const SideList = ({ closeMenu }: SideListProps) => {
  const menuItems = [
    { text: 'Привет мир! Структура кода. Переменные.', path: 'HelloWorld' },
    { text: 'Типы данных. Преобразование типов.', path: 'Variables' },
    { text: 'Операторы. Операторы сравнения.', path: 'Operators' },
    { text: 'Условные операторы: if, "?". Логические операторы', path: 'Logics' },
    { text: 'Циклы while и for.', path: 'Loops' },
    { text: 'Функции. Function Expression и функции-стрелки.', path: 'Funcions' },
    { text: 'Строки. Методы строк.', path: 'Strings' },
    { text: 'Массивы. Методы массивов.', path: 'Arrays' },
    { text: 'Объекты. Методы объекта, "this"', path: 'Objects' },
    { text: 'Конструкторы, создание объектов через "new"', path: 'Constructors' }
  ];

  return (
    <div
      className="side-list"
      role="presentation"
      onClick={closeMenu}
      onKeyDown={closeMenu}
    >
      <div className="container">
        <h3>
          Лабораторные работы:
        </h3>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItemLink key={item.text} to={`/Labs/${item.path}`}>
              {item.text}
            </ListItemLink>
          ))}
        </List>
      </div>
    </div>
  );
};

export default memo<SideListProps>(SideList);
