import './App.css';
import Contact from './component/Contact';
import Contacts from './contacts.json';
import { useState } from 'react';

const mapContactData = contacts => {
  return contacts.map(contact => {
    return {
      ...contact
    };
  });
};

function App() {
  let slice = Contacts.slice(0, 5);
  const [contacts, setContacts] = useState(mapContactData(Contacts));
  const [slicedArray, setSlicedArray] = useState(slice);

  const addHandler = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 5) + 5);
    const randomContact = contacts[randomIndex];
    if (!slicedArray.includes(randomContact)) {
      const updatedSlicedArray = [...slicedArray, randomContact];
      setSlicedArray(updatedSlicedArray);
    }
  };

  const sortName = () => {
    const sortedArray = slicedArray.slice().sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setSlicedArray(sortedArray);
  };

  const sortPopularity = () => {
    const sortedArray = slicedArray
      .slice()
      .sort((a, b) => b.popularity - a.popularity);
    setSlicedArray(sortedArray);
  };

  const deleteContact = contactId => {
    const updatedSlicedArray = slicedArray.filter(
      contact => contact.id !== contactId
    );
    setSlicedArray(updatedSlicedArray);
  };

  return (
    <div>
      <div>
        <h2>IronContacts</h2>
        <div>
          <button onClick={addHandler}>Add Random Contact</button>
          <button onClick={sortName}>Sort By Name</button>
          <button onClick={sortPopularity}>Sort By Popularity</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete Contact</th>
          </tr>
        </thead>
        <tbody>
          {slicedArray.map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
