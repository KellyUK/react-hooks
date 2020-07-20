import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
  {
    title: 'what is react?',
    content: 'a front end framework',
  },
  {
    title: 'why react?',
    content: "it's fun",
  },
  {
    title: 'what is your favourite framework?',
    content: 'react',
  },
];

const App = () => {
  return (
    <div>
      <h1>Hooks App</h1>
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
