import React from 'react'
import IndividualItem from './individual_item'

class Activities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "activity",
            name: "",
            price: "",
            description: "",
            url: "",
            completed: false,
            date_completed: ""
        }

        this.updateField = this.updateField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateField(e, field) {
        this.setState({
            [field]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        if (this.state.name === "") {
            alert("Please enter information")
            return
        }
        this.props.addItem(this.state)
    }

    render() {
        let items = this.props.items ? this.props.items.filter(item => item.category === "activity") : ""

        return (
            <div id="activities">
                <h1>ACTIVITIES</h1>
                <form>
                    <input type="text" value={this.state.name} onChange={(e) => this.updateField(e, "name")} placeholder="ACTIVITY" />
                    <input type="number" step="1" value={this.state.price} onChange={(e) => this.updateField(e, "price")} placeholder="$$$" />
                    <input type="text" value={this.state.url} onChange={(e) => this.updateField(e, "url")} placeholder="URL" />
                    <p id="add-button" onClick={this.handleSubmit}>ADD</p>
                </form>

                <div className="item-container">
                    {
                        items.map(item => (
                            <IndividualItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Activities