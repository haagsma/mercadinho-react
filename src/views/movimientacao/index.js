import React, { Component } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Badge,
  PaginationItem,
  PaginationLink,
  Pagination,
  FormGroup, Input, Col, Row, Label
} from "reactstrap";

class Movimentacao extends Component{

  render(){
    return (<Card>
      <CardHeader>
        <Row>
          <Col xs="12" sm="9">
            Movimentação de Produtos
          </Col>
          <Col xs="12" sm="3">
            <FormGroup style={{maxWidth: 300}}>
              <Input type="text" id="name" placeholder="Procurar" required />
            </FormGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <button className="btn btn-light mb-3 mr-2"> Todos</button>
        <button className="btn btn-success mb-3 mr-2"> Vendas</button>
        <button className="btn btn-primary mb-3 mr-2"> Compras</button>
        {/*<button className="btn btn-warning mb-3 mr-2"> Avariados</button>*/}
        <button className="btn btn-danger mb-3 mr-2"> Avariados</button>
        <div style={{marginBottom: 10}}>
          <Row>
            <Col xs="1" sm="1">
              <Label htmlFor="date-input">De</Label>
            </Col>
            <Col xs="11" sm="2">
              <Input style={{maxWidth: 200}} type="date" id="date-input" name="date-input" placeholder="date" />
            </Col>
            <Col xs="1" sm="1">
              <Label htmlFor="date-input">Até</Label>
            </Col>
            <Col xs="11" sm="2">
              <Input style={{maxWidth: 200}} type="date" id="date-input" name="date-input" placeholder="date" />
            </Col>
          </Row>
        </div>
        <Table responsive>
          <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Tipo</th>
            <th>Quantidade</th>
            <th>Data</th>
            <th>Ação</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10284420394</td>
            <td>Leite</td>
            <td><Badge color="success">Venda</Badge></td>
            <td>23</td>
            <td>01-01-2020 1:45</td>
            <td><button title="Detalhes" className="btn btn-primary mr-2"><i className="fa fa-edit"></i></button></td>
          </tr>
          </tbody>
        </Table>
        <div className="align-content-center ">
          <Pagination>
            <PaginationItem>
              <PaginationLink previous tag="button"></PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next tag="button"></PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </CardBody>
    </Card>)
  }
}

export default Movimentacao;
