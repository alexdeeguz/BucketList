import React from 'react'
import IndividualItem from './individual_item'

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
        let items = this.props.items ? this.props.items.filter(item => item.category === "travel") : ""
        return (
            <div id="travel">
                <h1>TRAVEL</h1>
                <form>
                    <input type="text" value={this.state.name} onChange={(e) => this.updateField(e, "name")} placeholder="NAME/LOCATION" />
                    {/* <input type="number" step="1" value={this.state.price} onChange={(e) => this.updateField(e, "price")} placeholder="$$$" /> */}
                    <input type="text" value={this.state.url} onChange={(e) => this.updateField(e, "url")} placeholder="URL" />
                    <p id="add-button" onClick={this.handleSubmit}>ADD</p>
                </form>

                <div>
                    {
                        items.map(item => (
                            <IndividualItem 
                                key={item.id} item={item} 
                                addSubcategory={this.props.addSubcategory} 
                                getSubcategories={this.props.getSubcategories} 
                                subcategories={this.props.subcategories}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Travel