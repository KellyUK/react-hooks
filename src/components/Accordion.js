import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((items, index) => {
    const { content, title } = items;

    const onTitleClicked = index => {
      setActiveIndex(index);
    };
    return (
      <React.Fragment key={title}>
        <div className='title active' onClick={() => onTitleClicked(index)}>
          <i className='dropdown icon'></i>
          {title}
        </div>
        <div className='content active'>
          <p>{content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className='ui styled accordion'>
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
