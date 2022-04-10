import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Form, Table } from "react-bootstrap";
const UseFocus = () => {
	const htmlElRef = useRef(null)
	const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

	return [ htmlElRef,  setFocus ] 
}

const TableNumbers =()=> {
  const [input1Val, setInput1Val] = useState("");
  const [input1Ref, setInput1Focus] = UseFocus();
  const [input2Val, setInput2Val] = useState("");
  const [input2Ref, setInput2Focus] = UseFocus();
  const [input3Val, setInput3Val] = useState("");
  const [input3Ref, setInput3Focus] = UseFocus();
  const [input4Val, setInput4Val] = useState("");
  const [input4Ref, setInput4Focus] = UseFocus();
  const [input5Val, setInput5Val] = useState("");
  const [input5Ref, setInput5Focus] = UseFocus();
  const [input6Val, setInput6Val] = useState("");
  const [input6Ref, setInput6Focus] = UseFocus();
  const [input7Val, setInput7Val] = useState("");
  const [input7Ref, setInput7Focus] = UseFocus();
  const [input8Val, setInput8Val] = useState("");
  const [input8Ref, setInput8Focus] = UseFocus();
  const [input9Val, setInput9Val] = useState("");
  const [input9Ref, setInput9Focus] = UseFocus();
  return (
    <Table className="table-update">
      <tbody>
        <tr>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="6"
              value={input1Val}
              ref={input1Ref}
              onChange={(e)=>{
                const val = e.target.value 
                setInput1Val(val)
                if (val.length===1) setInput2Focus()
              }}

            />
          </td>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="9"
              value={input2Val}
              ref={input2Ref}
              onChange={(e)=>{
                const val = e.target.value 
                setInput2Val(val)
                if (val.length===1) setInput3Focus()
              }}

            />
          </td>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="2"
              value={input3Val}
              ref={input3Ref}
              onChange={(e)=>{
                const val = e.target.value 
                setInput3Val(val)
                if (val.length===1) setInput4Focus()
              }}

            />
          </td>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="7"
              value={input4Val}
              ref={input4Ref}
              onChange={(e)=>{
                const val = e.target.value 
                setInput4Val(val)
                if (val.length===1) setInput5Focus()
              }}

            />
          </td>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="4"
              value={input5Val}
              ref={input5Ref}

              onChange={(e)=>{
                const val = e.target.value 
                setInput5Val(val)
                if (val.length===1) setInput6Focus()
              }}
            />
          </td>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="3"
              value={input6Val}
              ref={input6Ref}
              onChange={(e)=>{
                const val = e.target.value 
                setInput6Val(val)
                if (val.length===1) setInput7Focus()
              }}

            />
          </td>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="6"
              value={input7Val}
              ref={input7Ref}
              onChange={(e)=>{
                const val = e.target.value 
                setInput7Val(val)
                if (val.length===1) setInput8Focus()
              }}

            />
          </td>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="8"
              value={input8Val}
              ref={input8Ref}
              onChange={(e)=>{
                const val = e.target.value 
                setInput8Val(val)
                if (val.length===1) setInput9Focus()
              }}

            />
          </td>
          <td className="segl-number">
            <Form.Control
              type="text"
              required
              maxLength="1"
              min={0}
              max={9}
              defaultValue="1"
              value={input9Val}
              ref={input9Ref}
              onChange={(e)=>{
                const val = e.target.value 
                setInput9Val(val)
              }}

            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableNumbers;
