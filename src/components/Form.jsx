import React, { useState, useRef} from 'react'
import Table from './Table';



const Form = () => {

    
    const nameRef = useRef();
    const ageRef = useRef();
    const addRef = useRef();
    const depRef = useRef();
    const salaryRef = useRef();
    const mRef = useRef();

    let initForm = {
        name: "",
        age: 0,
        address: "",
        department: "",
        salary: 0,
        Mstatus: false
    }

    const [form, setForm] = useState(initForm);
    const [formArr, setFormArr] = useState([]);

    const handleChange = (e) => {
        let {type, name, value, checked} = e.target;
        // console.log(type, name, value, checked);
        if(type === "checkbox") {
            setForm({
                ...form,
                [name] : checked,
            }); 
            
        } else {
            setForm({
                ...form,
                [name] : value,
            });
        }
        
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("heyyyyyyyy",form);
        setFormArr([...formArr, form]);
        setForm(initForm);

        if(!form.name) nameRef.current.focus();
        else if(!form.age) ageRef.current.focus();
        else if(!form.address) addRef.current.focus();
        else if(!form.depRef) depRef.current.focus();
        else if(!form.salaryRef) salaryRef.current.focus();
        else if(!form.mRef) mRef.current.focus();

       
    }
    
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <div>
                <input type="name" 
                ref={nameRef}
                    name="name" 
                    placeholder="enter name" 
                    value={form.name} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <input type="age"
                ref={ageRef} 
                    name="age" 
                    placeholder="enter age" 
                    value={form.age} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <input type="address" 
                ref={addRef}
                    name="address" 
                    placeholder="enter address" 
                    value={form.address} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Department : </label>
            <select name='department' 
            onChange={handleChange} 
            placeholder="select department" 
            value={form.department}
            ref={depRef} >
                <option value=""></option>
                <option value="Production">Production</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Management">Management</option>
            </select>
            </div>
            <div>
                <input type="salary" 
                ref={salaryRef}
                    name="salary" 
                    placeholder="enter salary" 
                    value={form.salary} 
                    onChange={handleChange}
                />
            </div>
            <div>
                
                <input type="checkbox" 
                    name="Mstatus" 
                    ref={mRef}
                    // placeholder="enter maritial Status" 
                    checked={form.Mstatus} 
                    onChange={handleChange}
                />
                <label>Marital Status</label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        {formArr.length!==0 ? ( <table>
            <Table formArr={formArr} />
        </table>): (null)}
       
        
        
    </div>
  )
}

export default Form