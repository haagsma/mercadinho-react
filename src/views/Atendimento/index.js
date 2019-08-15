import React, {Component} from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Table, Col, Row, Input,
} from "reactstrap";
import styles from './style.module.css';

class Atendimento extends Component{

  style = {
    maxHeight: 500,
    overflowY: 'right',
  };

  render(){
    return <Card>
      <CardHeader>
        <Row>
          <Col sm="6">
            Compra do Cliente
          </Col>
          <Col sm="6">
            <div style={{textAlign: 'right'}}>
              <button className="btn btn-success mr-2 mb-3"><i className="fa fa-check"></i> Finalizar Compra</button>
              <button className="btn btn-danger mb-3"><i className="fa fa-trash"></i> Cancelar Compra</button>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
      <Row>
        <Col sm="6">
          <div>
            <Table responsive className={styles.tabela12} >
              <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Ação</th>
              </tr>
              </thead>
              <tbody style={this.style}>
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
          </div>
        </Col>
        <Col sm="6">
          <div style={{ width: '100%', maxWidth: 300, margin: 'auto'}}>
            <Card>
              <CardHeader>
                Preço Total
              </CardHeader>
              <CardBody>
                <div className="m-auto" style={{textAlign: 'center'}}>
                  <h1 style={{fontSize: 40}}>R$ 420,43</h1>
                </div>
              </CardBody>
            </Card>
            <Input placeholder="Código do Produto" />
          </div>
        </Col>
      </Row>
      </CardBody>
      {/*<CardFooter>*/}
      {/*  <div style={{textAlign: 'right'}}>*/}
      {/*    <button className="btn btn-success mr-2 mb-3"><i className="fa fa-check"></i> Finalizar Compra</button>*/}
      {/*    <button className="btn btn-danger mb-3"><i className="fa fa-trash"></i> Cancelar Compra</button>*/}
      {/*  </div>*/}
      {/*</CardFooter>*/}
    </Card>
  }
}

export default Atendimento;
