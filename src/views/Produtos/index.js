import React, {Component} from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Badge,
  PaginationItem,
  PaginationLink,
  Pagination,
  FormGroup, Input, Col, Row
} from "reactstrap";


class Produtos extends Component {


  render(){
    return (<Card>
      <CardHeader>
        <Row>
          <Col xs="12" sm="9">
            Lista de Produtos
          </Col>
          <Col xs="12" sm="3">
            <FormGroup style={{maxWidth: 300}}>
              <Input type="text" id="name" placeholder="Procurar" required />
            </FormGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <button className="btn btn-success mb-3"><i className="fa fa-plus-square"></i> Adicionar</button>
        <Table responsive>
          <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Fornecedor</th>
            <th>Estoque</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10284420394</td>
            <td>Leite</td>
            <td>Alimentos SA</td>
            <td>23</td>
            <td><Badge color="success">Desativado</Badge></td>
            <td><button className="btn btn-primary mr-2"><i className="fa fa-edit"></i></button><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
          </tr>
          <tr>
            <td>10284420394</td>
            <td>Leite</td>
            <td>Alimentos SA</td>
            <td>23</td>
            <td><Badge color="success">Desativado</Badge></td>
            <td><button className="btn btn-primary mr-2"><i className="fa fa-edit"></i></button><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
          </tr>
          <tr>
            <td>10284420394</td>
            <td>Leite</td>
            <td>Alimentos SA</td>
            <td>23</td>
            <td><Badge color="success">Desativado</Badge></td>
            <td><button className="btn btn-primary mr-2"><i className="fa fa-edit"></i></button><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
          </tr>
          <tr>
            <td>10284420394</td>
            <td>Leite</td>
            <td>Alimentos SA</td>
            <td>23</td>
            <td><Badge color="success">Desativado</Badge></td>
            <td><button className="btn btn-primary mr-2"><i className="fa fa-edit"></i></button><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
          </tr>
          <tr>
            <td>10284420394</td>
            <td>Leite</td>
            <td>Alimentos SA</td>
            <td>23</td>
            <td><Badge color="success">Desativado</Badge></td>
            <td><button className="btn btn-primary mr-2"><i className="fa fa-edit"></i></button><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
          </tr>
          <tr>
            <td>10284420394</td>
            <td>Leite</td>
            <td>Alimentos SA</td>
            <td>23</td>
            <td><Badge color="success">Desativado</Badge></td>
            <td><button className="btn btn-primary mr-2"><i className="fa fa-edit"></i></button><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
          </tr>
          <tr>
            <td>10284420394</td>
            <td>Leite</td>
            <td>Alimentos SA</td>
            <td>23</td>
            <td><Badge color="success">Desativado</Badge></td>
            <td><button className="btn btn-primary mr-2"><i className="fa fa-edit"></i></button><button className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
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

export default Produtos;
