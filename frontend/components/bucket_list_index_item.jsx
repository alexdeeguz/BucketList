import React from 'react'

class BucketListIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleMouseover = this.handleMouseover.bind(this)
        this.handleMouseout = this.handleMouseout.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.updateField = this.updateField.bind(this)
        this.save = this.save.bind(this)
        this.state = {
            edit: false,
            name: this.props.item.name,
            url: this.props.item.url
        }
    }

    updateField(e, field) {
        this.setState({
            [field]: e.target.value
        })
    }

    save() {
        const item = {
            name: this.state.name,
            url: this.state.url
        }
        
    }

    handleMouseover(e) {
        if (e.target.src === window.deleteURL1) e.target.src = window.deleteURL2
        if (e.target.src === window.infoURL1) e.target.src = window.infoURL2
        if (e.target.src === window.editURL1) e.target.src = window.editURL2
    }

    handleMouseout(e) {
        if (e.target.src === window.deleteURL2) e.target.src = window.deleteURL1
        if (e.target.src === window.infoURL2) e.target.src = window.infoURL1
        if (e.target.src === window.editURL2) e.target.src = window.editURL1
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
                {this.state.edit ?
                <h3>
                    <input className="edit" type="text" placeholder={this.state.name} onChange={(e) => this.updateField(e, 'name')}/>
                        <input className="edit" type="text" placeholder={url ? url : "Add URL"} onChange={(e) => this.updateField(e, 'url')}/>
                    <span onClick={this.save} className="save">save</span>
                </h3> :
                <h3 
                    className={this.props.item.completed ? "completed" : "item-name"}
                    onClick={this.updateItem}
                >{name}</h3>}
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
                        id="edit-icon" 
                        className="icon" 
                        src={window.editURL1}
                        onMouseOver={this.handleMouseover}
                        onMouseOut={this.handleMouseout}
                        onClick={() => this.setState({edit: !this.state.edit})}
                    />
                    <img 
                        id="delete-icon"
                        className="icon" 
                        src={window.deleteURL1} 
                        onMouseOver={this.handleMouseover} 
                        onMouseOut={this.handleMouseout} 
                        onClick={() => this.props.deleteItem(this.props.item.id)}
                    />
                    {/* {!this.state.edit ? <p id="edit-button" onClick={() => this.setState({edit: true})}>edit</p> : ""} */}
                </div>
            </div>
        )
    }
}

export default BucketListIndexItem