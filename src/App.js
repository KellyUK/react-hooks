import React from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color blue',
    value: 'blue',
  },
  {
    label: 'The color green',
    value: 'green',
  },
];

const App = () => {
  return (
    <div>
      <h1>Hooks App</h1>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};

export default App;
