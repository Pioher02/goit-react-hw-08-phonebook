import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from "../components/Filter";
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import Notiflix from 'notiflix';
import { Dna } from 'react-loader-spinner';
import { useEffect } from 'react';
import { updateFilter } from '../redux/filter/slice';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const token = useSelector(state => state.auth.token);
  const filter = useSelector(state => state.filter);
  const { isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [token, dispatch]);

  //Guarda contacto nuevo
  const saveContact = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    let validation = contacts.find(el =>
      el.name
        .toLocaleLowerCase()
        .includes(form.elements.name.value.toLocaleLowerCase())
    );
    if (validation === undefined) {
      dispatch(
        addContact({
          token,
          name: form.elements.name.value,
          number: form.elements.number.value,
        })
      );
      form.reset();
    } else {
      Notiflix.Notify.failure(validation.name + 'is already in contacts');
      form.reset();
    }
  };

  //Borrar contacto
  const handleDeleteContacts = id => {
    dispatch(deleteContact({ id, token }));
  };

   //Muestra contactos de acuerdo a filtro
  const filterContact = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <div style={{display:"flex", flexDirection:"column",}}>
      <ContactForm saveContact={saveContact} />
      <h1>Contacts</h1>
      <Filter filterContact={filterContact}></Filter>
      <ContactList
        contacts={contacts}
        filter={filter.value}
        deleteContact={handleDeleteContacts}
      />
      {isLoading && !error && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    </div>
  );
};

export default Contacts;
