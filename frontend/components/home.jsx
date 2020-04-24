import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handle = this.handle.bind(this)
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
            </div>
        )
    }
}

export default Home