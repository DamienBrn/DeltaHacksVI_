import React, { Component } from 'react';
import api from "../../../backend/services/api"
import Item from '../Item/Item'
import { itemsCount } from '../CameraLive/cameraScript'
import './ItemList.css'

export default class ItemList extends Component {
  render() {
    return (
      <div>
        <h1 className="item_list_title">Items detected</h1>
        {this.state.itemsFormatted}
      </div>
    );
  }

  constructor(props) {
    super(props)
    this.items = []
    this.state = {
      isLoading: false,
      itemsFormatted: [],
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.displayItems()
    }, 5000)

  }


  displayItems = () => {
    this.formatItems().then((itemsFormatted) => {
      this.setState({
        ...this.state,
        itemsFormatted
      })
    })
  }


  formatItems = async () => {
    //await this.loadItems()
    let itemsFound = itemsCount
    console.log(itemsFound)
    // Object.keys(itemsFound).forEach(key => {
    //   console.log(key)
    //   console.log(itemsFound[key])
    // });


    var itemsArray = Object.keys(itemsFound).map(function (key) {
      return [key, itemsFound[key]];
    });

    console.log(itemsArray)


    itemsArray = itemsArray.map(item => {
      return (
        <Item

          name={item[0]}
          count={item[1]}


        />
      )
    })

    // Object.keys(itemsFound).map((key, index) => {
    //   return (
    //     <Item
    //       name={key}
    //       count={itemsFound[key]}
    //     />
    //   )
    // })
    // console.log(itemsFound)
    return itemsArray
  }


  loadItems = async () => {
    this.setState({ ...this.state, isLoading: true })
    await api.getAllItems().then(items => {
      this.setState({ ...this.state, isLoading: false })
      this.items = items.data
    })
  }



}
