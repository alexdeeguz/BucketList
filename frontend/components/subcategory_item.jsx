import React from 'react'

class SubcategoryItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleDetails: false
        }
        this.toggleDetails = this.toggleDetails.bind(this)
    }

    toggleDetails(e) {
        e.preventDefault()
        this.state.toggleDetails === false ?
            this.setState({ toggleDetails: true }) : this.setState({ toggleDetails: false })
    }

    render() {
        return (
            <div>
                <h3 className="cursor" onClick={this.toggleDetails}>{this.props.subcategory.name}</h3>
                {this.state.toggleDetails === true ?
                    <div>
                        <p>Price: ${this.props.subcategory.price}</p>
                        <a href="">Link</a>
                    </div> : ""
                }   
            </div>
        )
    }
}

export default SubcategoryItem