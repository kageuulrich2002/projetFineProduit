import './App.css';
import '../src/components/style/bootstrap.css'
import Input from './components/forms/imput';
import Checkbox from './components/forms/checkbox';
import ProductCategoryRow from './components/produits/productCategoryRow';
import ProductRow from './components/produits/productRow';
import { useState } from 'react';

//Notre Base de Donnée
const PRODUITS =[
  { category: "Fruits", price: '250Fcfa', stocked: true, name: "Pommes"},
  { category: "Fruits", price: '100Fcfa', stocked: true, name: "Banane"},
  { category: "Fruits", price: '450Fcfa', stocked: false, name: "Ananas"},
  { category: "Légume", price: '50Fcfa', stocked: true, name: "Tomate"},
  { category: "Légume", price: '50Fcfa', stocked: false, name: "Oignon"},
  { category: "Légume", price: '50Fcfa', stocked: true, name: "Piment"},
  { category: "Complement", price: '2500Fcfa', stocked: true, name: "Plantain"},
  { category: "Complement", price: '1000Fcfa', stocked: true, name: "Batate"},
  { category: "Complement", price: '400Fcfa', stocked: false, name: "Riz-bijous"},
  { category: "Complement", price: '250Fcfa', stocked: true, name: "Riz"},
  { category: "Complement", price: '600Fcfa', stocked: false, name: "Couscous"},
  { category: "Complement", price: '500Fcfa', stocked: true, name: "Macabo"},
]


function App() {
  //pour savoir si on affiche les chose ou non : action avec SearchBar qui est enfant
  const [schowStockOnly, setschowStockOnly] = useState(false)

  //pour effectuer la recherche...
  const [search, setSearch] = useState('')

  //system of fine
  const visibleProduits = PRODUITS.filter(product =>{
      if(schowStockOnly && !product.stocked){ //si on n'a schowStockOnly et le produit n'est pas en stoque
        return false //on n'affiche pas l'element
      }

      if(search && !product.name.includes(search)){ //si on n'a search et que le nom du product n'includes pas dan sla recherche
        return false // on retir l'element de notre tableau
      }


      return true //si tout c'est bin passé on affiche 
  })


  return (
    <div className='container my-3'>

      <SearchBar
                    //attriut du composant Checkbox 
                     schowStockOnly={schowStockOnly} 
                     onStokedOnlyChange={setschowStockOnly}

                    //attriut du composant Imput
                     search={search}
                     onSearchChange={setSearch}
       />
      <ProductTable  products={visibleProduits}/>
            
    </div>
  );
}

//Composant de recherche
function SearchBar({schowStockOnly, onStokedOnlyChange, search, onSearchChange}) {
  return <div>
      <div className='mb-3'>

          <Input 
                  value={search}
                   onChange={onSearchChange}
                    placeholder="Rechercher..."
           />

          <Checkbox id="stocked" 
                  checked={schowStockOnly} 
                  onChange={onStokedOnlyChange} 
                  label="N'afficher que les produit en stock"
           />

      </div>
  </div>
}

//Composant de regroupe desComposant"product"
function ProductTable ({products}) {
      const rows = [] //tableau vide
      let lastCategory = null //pour parcourir et recuperer les diff cathegorie du tableau : ici produsts qui defini product

      for (let product of products) { // pour dire que product == products[]
            if (product.category !== lastCategory){
              rows.push(<ProductCategoryRow key={product.category} name={product.category} />) // si product.category !== lastCategory alors on crée le nom de cathegorie
            } 
            lastCategory = product.category //Mise a jour de la nouvelle valeur de lastCategory

            rows.push(<ProductRow product={product} key={product.name} />) //affiche les element du  tableau
      } 

  return <table className='table'>
      <thead>
        <tr>
          <td>Nom</td>
          <td>Prix</td>
        </tr>
      </thead>
      
      <tbody>
        {rows}
      </tbody>
    </table>

}

export default App;
