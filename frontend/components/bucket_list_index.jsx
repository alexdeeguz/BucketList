import React from 'react'

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
        console.log(item)
    }

    updateField(e, field) {
        this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h3 onClick={this.logout}>Logout</h3>
                </div>

            
                <form>
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
        

                <div>

                </div>
            </div>
        )
    }
}

export default BucketListIndex