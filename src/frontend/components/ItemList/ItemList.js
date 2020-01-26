import React, { Component } from 'react';
import api from "../../../backend/services/api"
import Item from '../Item/Item'

export default class ItemList extends Component {
  render() {
    return (
      <div>
        {this.state.itemsFormatted}
      </div>
    );
  }

  constructor(props){
    super(props)
    this.items = []
    this.state={
      isLoading:false,
      itemsFormatted : [],
      }
  }

  componentDidMount(){
    this.displayItems()
  }


  displayItems = ()=>{
    this.formatItems().then((itemsFormatted)=>{
        this.setState({
            ...this.state,
            itemsFormatted
        })
    })
}


  formatItems = async()=>{
    await this.loadItems()
    let itemsFound = []
    itemsFound = this.items.map(item => {
        return (
            <Item 
                key={item._id}
                itemId={item._id} 
                name={item.name} 
                description={item.description} 
                count={item.count}
            />
        )
    })
    return itemsFound
}


loadItems = async()=>{
  this.setState({...this.state, isLoading :  true})
  await api.getAllItems().then(items => {
    this.setState({...this.state, isLoading :  false})
    this.items = items.data
  })
}



}
