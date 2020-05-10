import React from 'react'
import IndexItem from './bucket_list_index_item'

class BucketListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            name: "",
            url: "",
            filter: 'all'
        }
        this.logout = this.logout.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchItems()
    }

    logout() {
        this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    handleSubmit(e) {
        e.preventDefault()
        const item = {
            category: this.state.category,
            name: this.state.name,
            url: this.state.url,
            completed: false,
            user_id: this.props.currentUser.id
        }
        this.props.addItem(item)
        this.setState({
            category: "",
            name: "",
            url: ""
        })
    }

    updateField(e, field) {
        this.setState({
            [field]: e.target.value
        })
    }

    render() {
        let items;
        if (this.props.bucketListItems) {
            if (this.state.filter === 'all') {
                items = this.props.bucketListItems
            } else {
            items = this.props.bucketListItems
            items = items.filter(item => item.category === this.state.filter)
            }
            return (
                <div>
                    <div className="header">
                        <h3>BUCKET LIST</h3>
                        <h3 id="logout-button" onClick={this.logout}>Logout</h3>
                    </div>

                    <div className="main-panel">
                        <div className="left-panel">
                        { this.state.filter === "all" ?
                                <h2>You have <span className="number">{items.length}</span> {items.length === 1 ? "item" : "items"} in your bucket list.</h2> : 
                                <h2>You have <span className="number">{items.length}</span> {items.length === 1 ? "item" : "items"} in your {this.state.filter} bucket list.</h2>
                        }
                            <form className="form">
                                <div className="buttons">
                                    <p 
                                        href="#" 
                                        className={this.state.category === 'food' ? 'button selected' : 'button'}
                                        onClick={(e) => this.setState({category: e.target.innerHTML.toLowerCase()})}
                                    >Food</p>
                                    <p 
                                        href="#" 
                                        className={this.state.category === 'travel' ? 'button selected' : 'button'}
                                        onClick={(e) => this.setState({ category: e.target.innerHTML.toLowerCase() })}
                                    >Travel</p>
                                    <p 
                                        href="#" 
                                        className={this.state.category === 'activity' ? 'button selected' : 'button'}
                                        onClick={(e) => this.setState({ category: e.target.innerHTML.toLowerCase() })}
                                    >Activity</p>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Name/Title/Activity"
                                    value={this.state.name}
                                    onChange={(e) => this.updateField(e, 'name')}
                                />
                                <input 
                                    type="text" 
                                    placeholder="URL (optional)"
                                    value={this.state.url}
                                    onChange={(e) => this.updateField(e, 'url')}
                                />
                                <h1 id="add-button" onClick={this.handleSubmit}>+</h1>
                                
                            </form>
                        </div>

                        <div className="right-panel">
                            <div className="filters">
                                <h3
                                    id={this.state.filter === 'all' ? 'selected-filter' : ""}
                                    onClick={(e) => this.setState({filter: e.target.innerHTML.toLowerCase()})}
                                >ALL</h3>
                                <h3
                                    id={this.state.filter === 'food' ? 'selected-filter' : ""}
                                    onClick={(e) => this.setState({ filter: e.target.innerHTML.toLowerCase() })}
                                >FOOD</h3>
                                <h3
                                    id={this.state.filter === 'travel' ? 'selected-filter' : ""}
                                    onClick={(e) => this.setState({ filter: e.target.innerHTML.toLowerCase() })}
                                >TRAVEL</h3>
                                <h3
                                    id={this.state.filter === 'activity' ? 'selected-filter' : ""}
                                    onClick={(e) => this.setState({ filter: 'activity' })}
                                >ACTIVITIES</h3>
                            </div>
                            <div>
                            {items.map(item => <IndexItem key={item.id} item={item} deleteItem={this.props.deleteItem} editItem={this.props.editItem}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default BucketListIndex