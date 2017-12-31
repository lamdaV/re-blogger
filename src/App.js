import React, { Component } from "react";
import { Dropdown, Menu, Segment } from "semantic-ui-react";
import Post from "./post/Post.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    // Get the home page.
    let homeType;
    let homeId;
    Object.keys(this.props.postMapping).forEach((key) => {
      this.props.postMapping[key].forEach((post, index) => {
        if (post.name === "home") {
          homeType = key;
          homeId = index;
        }
      })
    })
    this.state = {dropdownIcon: "folder outline", type: homeType, id: homeId};

    // Bind keys.
    this.handleDropdownOpen = this.handleDropdownOpen.bind(this);
    this.handleDropdownClose = this.handleDropdownClose.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.makeDropdownMenus = this.makeDropdownMenus.bind(this);
    this.makeDropdownItems = this.makeDropdownItems.bind(this);
  }

  handleDropdownOpen(event, data) {
    this.setState({dropdownIcon: "folder open outline"});
  }

  handleDropdownClose(event, data) {
    this.setState({dropdownIcon: "folder outline"});
  }

  handleItemClick(event, data) {
    this.setState({type: data.category, id: data.id});
  }

  makeDropdownMenus(key, index) {
    return(
      <Dropdown key={key + index} item simple text={key}>
        <Dropdown.Menu>
          {this.props.postMapping[key].map(this.makeDropdownItems)}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  makeDropdownItems(item, index) {
    return (
      <Dropdown.Item category={item.type} id={index} key={item.name + index}
        active={this.state.type === item.type && this.state.id === index}
        onClick={this.handleItemClick}>
        {item.name}
      </Dropdown.Item>
    )
  }

  render() {
    return (
      <div>
        <Menu>
          {Object.keys(this.props.postMapping).map(this.makeDropdownMenus)}
        </Menu>

        <Segment>
          <Post content={this.props.postMapping[this.state.type][this.state.id].content}/>
        </Segment>

      </div>
    );
  }
}

export default App;
