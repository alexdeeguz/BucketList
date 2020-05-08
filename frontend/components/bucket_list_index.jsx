import React from 'react'
import IndexItem from './bucket_list_index_item'

class BucketListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            name: "",
            url: ""
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
        if (this.props.bucketListItems) {
            const items = this.props.bucketListItems
            return (
                <div>
                    <div className="header">
                        <h3 onClick={this.logout}>Logout</h3>
                    </div>

                    <div className="main-panel">
                        <div className="left-panel">
                            <form className="form">
                                <select onChange={(e) => this.updateField(e, 'category')}>
                                    <option select="true">--Select a category--</option>
                                    <option value="food">Food</option>
                                    <option value="travel">Travel</option>
                                    <option value="activity">Activity</option>
                                </select>
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
                                <button onClick={this.handleSubmit}>Add</button>
                            </form>
                        </div>

                        <div className="right-panel">
                            {items.map(item => <IndexItem key={item.id} item={item} deleteItem={this.props.deleteItem} done={this.props.done}/>)}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default BucketListIndex