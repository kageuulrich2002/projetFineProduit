/**
 * Composant  ProductCategoryRow :Ligne de tableau avec nom de la catégorie
 * @param {string} name 
 */

export default function ProductCategoryRow({name}) {
    return<div>
        <td colSpan={2}><strong style={{color: "blue"}}> {name} </strong></td>
    </div>
    
}