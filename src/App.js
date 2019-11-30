import React from 'react';
import './App.css';
// import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button , Container, Row, ListGroup, ListGroupItem ,Card,CardBody, CardSubtitle, CardTitle} from 'reactstrap';
import { Nav,Navbar, NavItem } from 'reactstrap';



library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: ['abc',
            'pqr',
           'xyz'],
      list2:[],
      selected:''
    };
    this.handleSelect =this.handleSelect.bind(this)
    this.handleRemove =this.handleRemove.bind(this)
    this.handleAdd =this.handleAdd.bind(this)
    this.renderImage = this.renderImage.bind(this)
    console.log(this.state)
  }


  handleSelect = (event) =>{
    if (event.target.value === 'abc'){
       this.setState({selected:'abc'});
      }
   if (event.target.value === 'pqr'){
     this.setState({selected:'pqr'});
    }
  if( event.target.value === 'xyz'){
    this.setState({selected:'xyz'});
  }
  console.log(this.state);
 }


 handleRemove = () =>{
   const selected = this.state.selected;
   const list2 =this.state.list2;
    this.state.list1.map(( item , index) =>{
      
      if(this.state.list1[index] ===selected){
        const a = item ;
        this.setState(this.state.list1.splice(index, 1));
        this.setState( () => { list2.push(item)});
      }
    })
  }

    handleAdd = () =>{
      const selected = this.state.selected;
      const list1 =this.state.list1;
       this.state.list2.map(( item , index) =>{
         
         if(this.state.list2[index] ===selected){
           const a = item ;
           this.setState(this.state.list2.splice(index, 1));
           this.setState( () => { list1.push(item)});
         }
        })
      }
    
      renderImage = (item) =>{
        console.log("new",item)

        if (item==='abc'){return <Card Clearfix tag='button' ><div style={{
          display: 'flex',
          alignItems: 'center',

        }}>
          <img width="120" src={require("./images.jpeg")} alt="Card image cap" />
        <Card >
          <CardBody >
            <CardTitle>Chicken Fry</CardTitle>
            <CardSubtitle >$ 9</CardSubtitle>
          </CardBody>
        </Card>
        
        </div></Card>}
        if (item==='pqr'){return <Card  tag='button' ><div style={{
          display: 'flex',
          alignItems: 'center',
          
        }}>
          <img width="120" src={require("./images (1).jpeg")} alt="Card image cap" />
        <Card >
          <CardBody >
            <CardTitle>Tandoori</CardTitle>
            <CardSubtitle >$ 25</CardSubtitle>
          </CardBody>
        </Card>
        
        </div></Card>}
        if (item==='xyz'){return <Card tag='button' ><div   style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img width="120" src={require("./noodles.jpg")} alt="Card image cap" />
        <Card >
          <CardBody >
            <CardTitle>Noodles</CardTitle>
            <CardSubtitle >$ 25</CardSubtitle>
          </CardBody>
        </Card>
        
        </div></Card>}
      }

 render(){

  return (
    <div>
  <div  className='home '><Navbar dark inverse fluid>
    <Nav style={{textAlign:'right', width:'100% ',alignContent:'right'}}>
      <NavItem>
        <Button color ='warning'  size='sm'>
          About
        </Button>
      </NavItem>
      <Button color ='warning'  size='sm'>
          Contact
        </Button>
    </Nav>
    </Navbar>

<hr></hr>
</div>

    <div className="body1 " style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="App1">
        <header>
          <Container>
          <ListGroup>
          {
            this.state.list1.map(item => {
            console.log(item)
            console.log(this.state)
            if(this.state.selected === item){
            console.log("incoming")
            return <ListGroupItem tag="button" onClick= {this.handleSelect} value = {item} active style={{marginTop:20}} key={item}>
                {this.renderImage(item)}
            </ListGroupItem>
            }
            else{
            return  <ListGroupItem tag="button"  onClick= {this.handleSelect} value = {item} style={{marginTop:20}} key={item}>
              {this.renderImage(item)}
            </ListGroupItem>
    }})
  }
          </ListGroup>
          </Container>
        </header>
      </div>
      <div alignItems = 'center' >
        <Row><Button onClick={this.handleRemove} color="warning">Accept</Button>{' '}</Row>
        <hr></hr>
        <hr></hr>
        <Row><Button  onClick={this.handleAdd} color="warning">Reject</Button>{' '}</Row>
      </div>
      <div className="App1">
        <header>
        <Container>
          <ListGroup>
          {
            this.state.list2.map(item => {
            console.log(item)
            console.log(this.state)
            if(this.state.selected === item){
            console.log("incoming")
            return <ListGroupItem tag="button" onClick= {this.handleSelect} value = {item} active style={{marginTop:20}} key={item}> {this.renderImage(item)}</ListGroupItem>
            }
            else{
            return  <ListGroupItem tag="button"  onClick= {this.handleSelect} value = {item} style={{marginTop:20}} key={item}> {this.renderImage(item)}</ListGroupItem>
    }})
  }
          </ListGroup>
          </Container>
        </header>
  </div>
  </div>
  </div>

  );
}}

export default App;
