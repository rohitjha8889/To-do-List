import React from "react";
import "../custom.css";

function Deleteitems(props) {
  return (
    <>
      <div className="container1">
        <table>
          {/* {props.index} */}
          <tr>
            <td>{props.index+1}.</td>
            <td colSpan={2} className="out_text">{props.item}</td>

            {/* <button className='delete-btn' onClick={ () => props.deleteData( props.index)}>Delete</button> */}
            <td colSpan={2}>
              <i
                class="fa-solid fa-trash delete-btn"
                onClick={() => props.deleteData(props.index)}
              ></i>
            </td>
            <td colSpan={2}>
            <i class="fa-solid fa-pen-to-square" onClick={() => props.updateItems(props.index)}></i>
             
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Deleteitems;
