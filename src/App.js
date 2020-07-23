import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';

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
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/search'>
            <Search />
          </Route>

          <Route path='/dropdown'>
            <Dropdown
              label='Select a color'
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Route>

          <Route path='/accordion'>
            <Accordion items={items} />
          </Route>
          <Route path='/translate'>
            <Translate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
