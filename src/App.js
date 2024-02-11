import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Chair Black',
          img: 'chairs-black.png',
          desc: 'Lorem ipsum dolor sit amet,consectetur adipisicing',
          category: 'chairs',
          price: '23'
        },
        {
          id: 2,
          title: 'Chair Blue',
          img: 'chairs-blue.png',
          desc: 'Lorem ipsum dolor sit amet,consectetur adipisicing',
          category: 'chairs',
          price: '23'
        },
        {
          id: 3,
          title: 'Chair Grey',
          img: 'chairs-grey.png',
          desc: 'Lorem ipsum dolor sit amet,consectetur adipisicing',
          category: 'chairs',
          price: '24'
        },
        {
          id: 4,
          title: 'Table Brown',
          img: 'table-brown.png',
          desc: 'lorem ipsum dolor sit amet,consectetur adipisicing',
          category: 'tables',
          price: '55'
        },
        {
          id: 5,
          title: 'Table Lamined',
          img: 'table-lamined.png',
          desc: 'lorem ipsum dolor sit amet,consectetur adipisicing',
          category: 'tables',
          price: '50'
        },
        {
          id: 6,
          title: 'Table White',
          img: 'table-white.png',
          desc: 'lorem ipsum dolor sit amet,consectetur adipisicing',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 7,
          title: 'Sofa',
          img: 'sofa.png',
          desc: 'lorem ipsum dolor sit amet,consectetur adipisicing',
          category: 'sofa',
          price: '89.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);

  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }


  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })

    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] },
      )
  }
}

export default App;
