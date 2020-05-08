import React from 'react'

class BucketListIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleMouseover = this.handleMouseover.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    handleMouseover(e) {
        e.target.src === window.deleteURL2 ? 
            e.target.src = window.deleteURL1 :
            e.target.src = window.deleteURL2 
    }

    updateItem() {
        const completed = !this.props.item.completed
        this.props.done(this.props.item.id, {
            completed: completed
        })
    }

    render() {
        const { name, url } = this.props.item
        return (
            <div className="bucket-list-item">
                <h3 
                    className={this.props.item.completed ? "completed" : ""}
                    onClick={this.updateItem}
                >{name}</h3>
                <div className="icons">
                    <img 
                        className="icon" 
                        src={window.deleteURL1} 
                        onMouseOver={this.handleMouseover} 
                        onMouseOut={this.handleMouseover} 
                        onClick={() => this.props.deleteItem(this.props.item.id)}
                    />
                </div>
            </div>
        )
    }
}

export default BucketListIndexItem