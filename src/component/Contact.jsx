const Contact = ({ contact, deleteContact }) => {
  return (
    <div>
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt={contact.name} />
        </td>
        <td>
          <b>{contact.name}</b>
        </td>
        <td>{contact.popularity}</td>
        <td>{contact.wonOscar && <p>🏆</p>}</td>
        <td>{contact.wonEmmy && <p>🏆</p>}</td>
        <td>
          <button onClick={() => deleteContact(contact.id)}>
            Delete Contact
          </button>
        </td>
      </tr>
    </div>
  );
};

export default Contact;
