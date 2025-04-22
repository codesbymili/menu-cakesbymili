import { useState } from 'react';
import './App.css';
import cakes from './cakeData';

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

function Header(){
  return(
    <div className='header'>
      <img className='logo' src="images/logo.png"/>
    </div>
  );
}

function Content(){
  const[selectedItem, setSelectedItem] = useState(cakes[0]);

  function handleSelection(cake){
    setSelectedItem(selected => selected = cake);
  }

    return(
    <div className='content'>
      <Menu selectedItem={selectedItem} handleSelection={handleSelection}></Menu>
      <Details selectedItem={selectedItem} handleSelection={handleSelection}></Details>
    </div>
  );
}

function Menu({selectedItem, handleSelection}){
  
  return(
    <div className='menu'>
      <h3>Menu</h3>
      <Items selectedItem={selectedItem} handleSelection={handleSelection}></Items>
    </div>
  );
}

function Items({selectedItem, handleSelection}){
  return(
    <div className='items'>
      {cakes.map((cake) => (
          <div key={cake.id} className={selectedItem?.id === cake.id ? 'item-card item-selected' : 'item-card' } onClick={() => handleSelection(cake)}>
            <img src={cake.image} alt="" className='cake-image' />
            <p>{cake.name}</p>
          </div>))}
    </div>
  );
}

function Button({children}){
  return(
    <button className='button'>{children}</button>
  );

}

function Details({selectedItem, handleSelection}){
  return(
    <div className='details'>
        <h3>{selectedItem?.name}</h3>
        <img src={selectedItem?.image} alt="" />
        <p className='price'>Price : Rs.{selectedItem?.price}/Kg</p>
        <p className='description'><em>" {selectedItem?.description}"</em></p>
    </div>
  );
}
