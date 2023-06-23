

import AddContact from "components/AddContact/AddContact";
import ContactsList from "./components/ContactsList";
import ContactsFilter from "components/ContactsFilter";

function App() {
 

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor:"bisque",
      }}
    >
     
      <h1>PhoneBook</h1>
      <AddContact />
      <ContactsFilter/>
      <h1>Contacts</h1>
      <ContactsList />
    </div>
  );
}

export default App;
