import React from 'react' 

class IndividualItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleDetails: false
        }

        this.toggleDetails = this.toggleDetails.bind(this)
    }

    toggleDetails() {
        this.state.toggleDetails === false ? 
            this.setState({toggleDetails: true}) : this.setState({toggleDetails: false})
    }

    render() {
        const { name, price, url } = this.props.item
        return (
            <div>
                <h3 onClick={this.toggleDetails}>{name}</h3>
                { this.state.toggleDetails === true ? 
                <div>
                    <p>Price: ${price}</p>
                    <a href={url}>Link</a>
                </div> : ""
                }   
            </div>
        )
    }
}

export default IndividualItem

