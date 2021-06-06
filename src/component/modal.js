import React,{useRef} from 'react';
import { Modal, Button ,Form} from 'react-bootstrap';
export default function ModalProduct({ show, handleModal,setproductName,setproductWeight,onSubmit, productWeight }) {
  const inputEl = useRef(null);

  const AddValue =(e)=>{
    /**only number accept */
    if (!(e.target.value).toString().match("^[0-9_ t]*$")){
      inputEl.current.value =productWeight
      return;
    }
    let value= e.target.value;
    let newValue = value.split(' t');
    let stringsValues = newValue.join('') + ' t'
    inputEl.current.value = stringsValues
    setproductWeight(stringsValues);
    if(e.target.value.toString().length === 2){
      setproductWeight('')
    }
  }
  const OnKeyBack =(e)=>{
    let keyValue = e.keyCode;
    if(keyValue === 8){
      let value =e.target.value;
      if(e.target.startPosition === value.length -1)
      inputEl.current.value = (value.slice(0, value.length-2)+' t')
    }
    if(e.target.value.toString().length === 1){
      setproductWeight('')
    }
    
  }
  const handleKeyUp =(e)=>{
    let startPosition = e.target.value.toString().length;
    inputEl.current.selectionStart = startPosition -2;
    inputEl.current.selectionEnd = startPosition -2;
  }
  return (
    <div>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Product name *</Form.Label>
              <Form.Control type="email" placeholder="Enter product name" onKeyUp={(e)=>setproductName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail2">
              <Form.Label>Product weight *</Form.Label>
                <Form.Control type="text" ref={inputEl} placeholder="Enter product weight" value={productWeight}  onChange={(e)=>AddValue(e)} onKeyUp={(e)=>{handleKeyUp(e)} } onKeyDown={(e)=> OnKeyBack(e)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            cancel
          </Button>
          <Button variant="primary" onClick={()=>onSubmit()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}