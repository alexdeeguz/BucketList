import React from 'react'

class BucketListIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleMouseover = this.handleMouseover.bind(this)
        this.handleMouseout = this.handleMouseout.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    handleMouseover(e) {
        if (e.target.src === window.deleteURL1) e.target.src = window.deleteURL2
        if (e.target.src === window.infoURL1) e.target.src = window.infoURL2
    }

    handleMouseout(e) {
        if (e.target.src === window.deleteURL2) e.target.src = window.deleteURL1
        if (e.target.src === window.infoURL2) e.target.src = window.infoURL1
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
                    className={this.props.item.completed ? "completed" : "item-name"}
                    onClick={this.updateItem}
                >{name}</h3>
                <div className="icons">
                    {this.props.item.url ? 
                    <a href={this.props.item.url} target="_blank"><img 
                        className="icon"
                        src={window.infoURL1}
                        onMouseOver={this.handleMouseover}
                        onMouseOut={this.handleMouseout}

                    />
                    </a> : "" }
                    <img 
                        className="icon" 
                        src={window.deleteURL1} 
                        onMouseOver={this.handleMouseover} 
                        onMouseOut={this.handleMouseout} 
                        onClick={() => this.props.deleteItem(this.props.item.id)}
                    />
                </div>
            </div>
        )
    }
}

export default BucketListIndexItem