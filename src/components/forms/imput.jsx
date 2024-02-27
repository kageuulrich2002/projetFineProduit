 /**
  * 
  * @param {string} placeholder : affiche de la valeur 
  * @param {string} value : valeur du comptenue, 
  * @param {(s: string) => void} onChane : communiquer avec le parent quand on change la valeur du champs
  * @returns 
  */
export default function Input({placeholder, value, onChange}) {
    return <div>
        <input 
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} // onChange recois directement la "valeur"(qui est dans les attributs de la funtion Input) du champs
         />
    </div>
    
}