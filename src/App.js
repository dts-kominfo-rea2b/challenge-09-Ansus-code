import './App.css';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App main">
    <header title="Your Friendly contac app">
    <Contac contacts= {contacts} />
      
    </div>
  );
}

export default App;
