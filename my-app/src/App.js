import React from 'react';

import Accordion from './Accordion';

const App = () => {
  const items = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' }
  ];

  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById('root'));
