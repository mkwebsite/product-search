import React, { useState } from 'react';
import { Button, Container, Row,Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Modal from './modal';
import {toast} from 'react-toastify'
import Data from './localdata'
const HomePage = () => {
  /** Modals */
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };
  /** Tab;es data */
  const [tableData ,setTableData] = useState(Data);
  const [originalData ,setOriginalData] = useState(tableData);

  /** from data */
  const [productName, setproductName] = useState('');
  const [productWeight, setproductWeight] = useState('');
  const onSubmit =()=>{
    if(!productName || !productWeight)
    {
      toast.error('Enter the details');
      return
    }
    let product = tableData;
    product.push({
      name: productName,
      weight: productWeight
    });
    handleModal();
    setTableData(product);
    toast.success('product added successfully')
  };

  /** Handle search */
  const handleSearch = (search) =>{
    let myArray = tableData;
    if(myArray && myArray.length > 0 && search){
      const result = myArray.filter(word => word.name.match(new RegExp(search)));
      setTableData(result);
    }else{
      setTableData(originalData)
    }
  };

  return (
    <div className="App">
      <Modal show={show} handleModal={handleModal} setproductName={setproductName}  setproductWeight={setproductWeight} onSubmit={onSubmit} productWeight={productWeight}/>
      <Container>
        <Row xs={12} md={12} lg={12} style={{margin:"20px 0px 20px 0px"}} >
          <Button
            type="button"
            color="primary"
            onClick={() => handleModal()}
          >
            Add
          </Button>
          <input type="text" name="search" style={{marginLeft:"10px"}} placeholder="Search product by name" onChange={(e) =>handleSearch(e.target.value)}/>
        </Row>
        <Row xs={12} md={12}>
          <Card style={{width:'100%'}}>
            <Card.Body>
              <Card.Title>
                <div><strong>Product Listing</strong></div>
              </Card.Title>
              <Card.Text width="100%">
              <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {
               tableData.length > 0 && tableData.map((item,index)=>{
                  return(
                  <tr>
                  <td key={index}>{item.name}</td>
                  <td key={index+5}>{item.weight} (t)</td>
                </tr>
                  )
                })
              }
            </tbody>
          </Table>
              </Card.Text>
            </Card.Body>
          </Card>
         
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
