/**
 * Composant  ProductRow : Ligne prouit dans un tableau à 2 colonnes (nom / prix)
 * @param {{name: string, stoked: boolean, price: string}}  product
 * @returns 
 */
export default function ProductRow({product}) {

    const style = product.stocked ? undefined : {color: 'red'}

    return <tr>
        <td style={style}> {product.name}</td>
        <td> {product.price}</td>
    </tr>
    
}