import React from 'react';
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';


const Todo =()=>{
    const [inputdata, setInputdata] = useState("");
    const [Items, setItems] = useState([]);

    const Additems = () => {
        if (!inputdata) {
            alert("please fill the data")
        } else {
            const myNewInputData = {
                id: new Date().getTime.toString,
                name: inputdata,
            }
            setItems([...Items, inputdata])
            setInputdata("")
        };
    }

    const deleteItem = (index) => {
        const updatedItems = Items.filter((curElem) => {
          return curElem.id !== index;
        });
        setItems(updatedItems);
      };
      const clearAll = () => {
          setItems([]);
      }

      useEffect(() => {
        localStorage.setItem("mytodo", JSON.stringify(Items));
    }, [Items])

    return (
        <>
            <div className="head">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo-checklist-tasks.jpg" alt="" srcset="" />
                        <figcaption>Add your list</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add your list here" className="form-control"
                            value={inputdata}
                            onChange={(event) => setInputdata(event.target.value)} />
                        <i  className="fa fa-plus" onClick={Additems}></i>
                    </div>
                    <div className="showItems">
                        {Items.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem}</h3>
                                    <div className="todo-btn">
                                        <i
                                            className="far fa-trash-alt add-btn"
                                            onClick={() => deleteItem(curElem.id)}></i>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className="showItems"><button className="btn effect04" data-sm-link-text="Remove All"
                        onClick={() => clearAll()}>
                        <span>Remove all</span>
                    </button></div>
                </div>
            </div>
        </>
    )
}

export default Todo

