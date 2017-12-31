import React, { Component } from "react";
import { Dropdown, Menu, Segment } from "semantic-ui-react";
import Post from "./post/Post.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {dropdownIcon: "folder outline", id: 0};

    this.handleDropdownOpen = this.handleDropdownOpen.bind(this);
    this.handleDropdownClose = this.handleDropdownClose.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.makeDropdownItems = this.makeDropdownItems.bind(this);
  }

  handleDropdownOpen(event, data) {
    this.setState({dropdownIcon: "folder open outline"});
  }

  handleDropdownClose(event, data) {
    this.setState({dropdownIcon: "folder outline"});
  }

  handleItemClick(event, data) {
    this.setState({id: data.id});
  }

  makeDropdownItems(item, index) {
    return (
      <Dropdown.Item id={index} key={item.name + index} active={this.state.id === index}
        onClick={this.handleItemClick}>
        {item.name}
      </Dropdown.Item>
    )
  }

  render() {
    return (
      <div>
        <Menu>
          <Dropdown item simple icon={this.state.dropdownIcon}
            onOpen={this.handleDropdownOpen} onClose={this.handleDropdownClose}>
            <Dropdown.Menu>
              {this.props.postMapping.posts.map(this.makeDropdownItems)}
            </Dropdown.Menu>
          </Dropdown>
        </Menu>

        <Segment>
          <Post content={this.props.postMapping.posts[this.state.id].content}/>
        </Segment>

      </div>
    );
  }
}

export default App;
