import React from 'react'
import Food from './food'
import Activities from './activities'
import Travel from './travel'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(e) {
        let target;
        if (e.target.innerHTML === "Food") {
            target = document.getElementById("food")
        } else if (e.target.innerHTML === "Travel") {
            target = document.getElementById("travel")
        } else if (e.target.innerHTML === "Activities") {
            target = document.getElementById("activities")
        }
        
        let position = target.getBoundingClientRect().top
        window.scrollTo(0, position-50)
    }

    componentDidMount() {
        this.props.getAllItems()
    }

    render() {
        return (
            <div className="home">
                <h1>BUCKET LIST</h1>
                <nav>
                    <ul>
                        <li onClick={this.handleScroll}>Food</li>
                        <li onClick={this.handleScroll}>Travel</li>
                        <li onClick={this.handleScroll}>Activities</li>
                    </ul>
                </nav>

                <div>
                    <h2>TOTAL BUCKET LIST ITEMS:</h2>
                </div>

                <Food addItem={this.props.addItem} items={this.props.bucketListItems}/>
                <Travel 
                    addItem={this.props.addItem} 
                    items={this.props.bucketListItems} 
                    addSubcategory={this.props.addSubcategory} 
                    getSubcategories={this.props.getAllSubcategories}
                    subcategories={this.props.subcategories}
                    />
                <Activities addItem={this.props.addItem} items={this.props.bucketListItems}/>
            </div>
        )
    }
}

export default Home
