/**
 * 
 * @param {*} checked  :savoir si la case est coché 
 * @param {*} onChange  :detecté si la case est decoché ou coché
 * @param {*} label  :  afficher le texte a droite
 * @param {*} id  :  pour pouvoir cliquer sur le label
 * @returns 
 */


export default function Checkbox({checked, onChange, label , id}) {
    return <div className="form-check">
        <input
            id={id}
            type="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)} //recois directement les changement du "checked"
        />

        <label  htmlFor={id} className="form-check-label"> {label} </label> {/*htmlFor={id} interaction avec id*/}
    </div>
    
}