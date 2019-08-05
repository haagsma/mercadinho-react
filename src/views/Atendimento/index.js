import React, {Component} from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  PaginationItem,
  PaginationLink,
  Pagination,
  FormGroup, Input, Col, Row
} from "reactstrap";

class Atendimento extends Component{


  render(){
    return <Card>
      <CardHeader>
        Compra do Cliente
      </CardHeader>
      <CardBody>
      <Row>
        <Col sm="6">
          <Table responsive>
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <td>1245343141</td>
              <td>Vinagre</td>
              <td>2</td>
              <td><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
            </tr>
            </tbody>
          </Table>
        </Col>
        <Col sm="6">
          <div className="m-auto" style={{textAlign: 'center'}}>
            <h1 style={{fontSize: 40}}>R$ 420,43</h1>
          </div>
        </Col>
      </Row>
      </CardBody>
      <CardFooter>
        <div style={{textAlign: 'right'}}>
          <button className="btn btn-danger mb-3"><i className="fa fa-trash"></i> Cancelar Compra</button>
        </div>
      </CardFooter>
    </Card>
  }
}

export default Atendimento;
