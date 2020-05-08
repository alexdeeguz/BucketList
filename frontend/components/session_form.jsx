import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateField(e, field) {
        this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state)
            .then(() => this.props.history.push('bucket-list'))
    }

    render() {
        if (this.props.formType === 'login') {
            return (
                <div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={this.state.username} 
                            onChange={(e) => this.updateField(e, 'username')}
                        /><br/>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={(e) => this.updateField(e, 'password')}
                        /><br/>
                        <button onClick={this.handleSubmit}>{this.props.formType.toUpperCase()}</button>
                        <Link to='/signup'>Register</Link>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={(e) => this.updateField(e, 'username')}
                        /><br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(e) => this.updateField(e, 'password')}
                        /><br />
                        <button onClick={this.handleSubmit}>{this.props.formType.toUpperCase()}</button>
                        <Link to='/login'>Back</Link>
                    </form>
                </div>
            )
        }
    }
}

export default SessionForm