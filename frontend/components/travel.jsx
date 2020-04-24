import React from 'react'

class Travel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "travel",
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
        this.props.addItem(this.state)
    }

    render() {
        return (
            <div id="food">
                <h1>TRAVEL</h1>
                <form>
                    <input type="text" value={this.state.name} onChange={(e) => this.updateField(e, "name")} placeholder="LOCATION" />
                    <input type="number" step="1" value={this.state.price} onChange={(e) => this.updateField(e, "price")} placeholder="$$$" />
                    <input type="text" value={this.state.url} onChange={(e) => this.updateField(e, "url")} placeholder="URL" />
                    <button onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        )
    }
}

export default Travel