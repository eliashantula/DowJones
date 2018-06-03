import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import Notes from './Notes'
//Basic Article Component
class Article extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      modal: !this.state.modal
    });
  }

  //Component Lifecycle
  //https://reactjs.org/docs/react-component.html#the-component-lifecycle
  /* DEPRECATED LIFECYCLE METHODS BELOW
  UNSAFE_componentWillMount() {
    console.log('component will mount');
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('component will receive props');
  }
  UNSAFE_componentWillUpdate() {
    console.log('component will update');
  }
  */

  static getDerivedStateFromProps(props, state) {
    console.log("get derived state from props");
    return null;
  }

  componentDidMount() {
    console.log("component did mount");
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update");
    return { foo: "bar" };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  //this fires every time a prop or state changes
  //to use any prop, use this.props.NAME_OF_PROP
  //use {} to add JS expressions
  //use className to add CSS classes
  //remember that this is not HTML!!
  //https://reactjs.org/docs/introducing-jsx.html
  render() {
    const {
      headline,
      summary,
      showSummary,
      image,
      key,
      fullArticle,
      onClick,
      index,
      onSubmit,
      notes
    } = this.props;
    

    return (
      <Col xs="6" style={{ padding: "10px" }}>
        <Card body outline color="secondary">
          <CardImg src={image} alt="" top width="40%" />

          <CardTitle> {headline}</CardTitle>
          <CardText>{summary}</CardText>

          <Button color="white" size="sm" style={{marginRight: "auto"}}>
            <a style={{ color: "black" }} href={fullArticle} target="_blank">
              Read Article
            </a>
          </Button>
          <Button style={{marginRight: "auto"}}value={index} onClick={onClick}  color="black" size="sm">
            Delete Article
          </Button>
        
          <Notes notes={notes}/>
          
      
          <ButtonDropdown style={{marginRight: "auto", display: "block"}} toggle={this.toggle} isOpen={this.state.dropdownOpen}>
            <DropdownToggle className="center"caret color="black" size="sm">
              Add Notes
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem toggle={false}>
              <Form  onSubmit={onSubmit}>


          <Label for="note" className="mr-sm-2">Add Note</Label>
          <Input type="textarea" name="textarea" id={index} placeholder="typehere..." value={this.state.value}/>
     
        <Button   value="submit" type="submit" size="sm" color="black">Save</Button>
        <Button   onClick={this.toggle}   size="sm" color="black">Close</Button>

        </Form>


              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Card>
      </Col>
    );
  }
}

//set default props here, if any
Article.defaultProps = {};

//export so others can use
export default Article;
