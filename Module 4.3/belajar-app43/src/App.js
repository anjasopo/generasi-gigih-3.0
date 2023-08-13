import React from 'react';
import './App.css';

const family = [
  { id: 0, name: 'Nama Bapaq', gender: 'male' },
  { id: 1, name: 'Nama Ibuq', gender: 'female' },
  { id: 2, name: 'Anak Ganteq', gender: 'male' },
  { id: 3, name: 'Anak Cantiq', gender: 'female' }
];

const List = () => {
  const femaleMembers = family.filter(member => member.gender === 'female');
  const listItems = femaleMembers.map(member => (
    <li key={member.id}>{member.name}</li>
  ));

  return (
    <div>
      <h1>List of Female Family Members</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
