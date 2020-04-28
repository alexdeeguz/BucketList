import React from 'react' 
import SubcategoryItem from './subcategory_item'

class IndividualItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleDetails: false,
            toggleSubcategoryForm: false,
            name: "",
            price: "",
            url: ""
        }

        this.toggleDetails = this.toggleDetails.bind(this)
        this.toggleSubcategoryForm = this.toggleSubcategoryForm.bind(this)
        this.updateField = this.updateField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.calculateTripCost = this.calculateTripCost.bind(this)
    }

    componentDidMount() {
        this.props.item.category === "travel" ? this.props.getSubcategories() : ""
    }

    toggleDetails(e) {
        e.preventDefault()
        this.state.toggleDetails === false ? 
            this.setState({toggleDetails: true}) : this.setState({toggleDetails: false})
    }

    toggleSubcategoryForm() {
        this.state.toggleSubcategoryForm === false ?
            this.setState({ toggleSubcategoryForm: true }) : this.setState({ toggleSubcategoryForm: false })
    }

    updateField(e, field) {
        this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const subcategory = {
            name: this.state.name,
            price: this.state.price,
            url: this.state.url,
            completed: false,
            bucket_list_item_id: this.props.item.id
        }
        this.props.addSubcategory(subcategory)
        this.setState({
            toggleSubcategoryForm: false,
            name: "",
            price: "",
            url: ""
        })
    }

    calculateTripCost() {
        let sum = 0
        this.props.subcategories.forEach(el => sum += el.price)
        return sum
    }

    render() {
        let subcategories = this.props.subcategories ? this.props.subcategories.filter(el => el.bucket_list_item_id === this.props.item.id) : ""
        const { name, price, url, category } = this.props.item
        return (
            <div className="item">
                <h2 id="item-name" onClick={this.toggleDetails}>{name.toUpperCase()}</h2>
                { this.state.toggleDetails === true ? 
                <div className="item-details">
                    {/* FOOD */}
                    {category === "food" || category === "activity" ?  
          
                    <div>
                        <p>Price: ${price}</p>
                        <a href={url} target="_blank">Link</a>
                    </div> : ""
                    }
                    {/* TRAVEL */}
                    {category === "travel" ? <p>Total cost of trip: {this.calculateTripCost()}</p> : ""}
                    {category === "travel" ? <p id="add-button" className="cursor" onClick={this.toggleSubcategoryForm}>Add Subcategory</p> : ""}
                    {category === "travel" && this.state.toggleSubcategoryForm === true ? 
                    <form>
                        <input type="text" value={this.state.name} onChange={(e) => this.updateField(e, "name")} placeholder="SUBCATEGORY"/>
                        <input type="number" step="1" value={this.state.price} onChange={(e) => this.updateField(e, "price")} placeholder="$$$" />
                        <input type="text" value={this.state.url} onChange={(e) => this.updateField(e, "url")} placeholder="URL" />
                        <button onClick={this.handleSubmit}>Add</button>
                    </form> : ''
                    }

                    {category === "travel" ? subcategories.map(subcategory => <SubcategoryItem key={subcategory.id} subcategory={subcategory}/>) : ""}
                </div> : ""
                }   
            </div>
        )
    }
}

export default IndividualItem

