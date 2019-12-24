import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='column'>
          <h2 className='column-title'>PRODUCTS</h2>
          <p>Some text..</p>
        </div>
        <div className='column'>
          <h2 className='column-title'>BASKET</h2>
          <p>Some text..</p>
        </div>
        <div className='column'>
          <h2 className='column-title'>INVENTORY</h2>
          <p>Some text..</p>
        </div>
      </div>
    );
  }
}

export default App;
