import React, { Component } from 'react';
import './Item.css'


export default class Item extends Component {
  render() {
    return (
      <div className="item_container">

        <div className="item_name">
        <strong>Name:&nbsp;</strong>{this.props.name}
        </div>

        <div className="item_description">
            <strong>Description:&nbsp;</strong> {this.props.description}
        </div>

        <div className="item_count">
            <strong>Count:&nbsp;</strong> {this.props.count}
        </div>

      </div>
    );
  }
}
