import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            passwordConfirm: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.uppercase = this.uppercase.bind(this)
        this.specialChar = this.specialChar.bind(this)
        this.usernameAvailable = this.usernameAvailable.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
    }

    componentDidMount() {
        if (this.props.formType === 'sign up') {
            this.props.getAllUsers()
        }
    }

    demoLogin(e) {
        e.preventDefault()
        const user = {
            username: "demo-user",
            password: "!Password"
        }
        this.props.action(user)
            .then(() => this.props.history.push('/bucket-list'))
    }

    usernameAvailable() {
        const usernames = this.props.users.map(el => el.username)
        return !usernames.includes(this.state.username)
    }

    updateField(e, field) {
        this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        if (this.props.formType === 'sign up') {
            if (this.state.password.length < 6 || !this.uppercase() || !this.specialChar() || !this.usernameAvailable()) return
        }
        this.props.action(user)
            .then(() => this.props.history.push('/bucket-list'))
    }

    uppercase() {
        const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for (let i = 0; i < this.state.password.length; i++) {
            if (alpha.includes(this.state.password[i])) return true
        }
        return false
    }

    specialChar() {
        const specialChars = `!@#$%^&*():;"''/?><,[]{}.`
        for (let i = 0; i < this.state.password.length; i++) {
            if (specialChars.includes(this.state.password[i])) return true
        }
        return false
    }

    passwordMatch() {
        return this.state.password === this.state.passwordConfirm
    }

    render() {
        const errors = this.props.errors
        if (this.props.formType === 'login') {
            return (
                <div className="session-form">
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
                        <h3 onClick={this.handleSubmit}>{this.props.formType.toUpperCase()}</h3>
                        <h3 onClick={this.demoLogin}>DEMO LOGIN</h3>
                        <Link id="link" to='/signup'><h3>Register</h3></Link>
                    </form>
                        <p id="errors">{errors.join(" ")}</p>
                </div>
            )
        } else {
            return (
                <div className="session-form">
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
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={this.state.passwordConfirm}
                            onChange={(e) => this.updateField(e, 'passwordConfirm')}
                        /><br />

                        <h3 onClick={this.handleSubmit}>{this.props.formType.toUpperCase()}</h3>
                        <Link id="link" to='/login'><h3>Back</h3></Link>
                    </form>
                        <div className="requirements">
                            {this.state.username === "" ? <span className="bad">Username can't be blank</span> : <span className={this.usernameAvailable() ? "good" : "bad"}>Username is available</span>}
                            <span className={this.state.password.length >= 6 ? "good" : "bad"}>Password must be at least 6 characters.</span>
                            <span className={this.uppercase() ? "good" : "bad"}>Password must have at least one uppercase letter.</span>
                            <span className={this.specialChar() ? "good" : "bad"}>Password must have at least one special character.</span>
                            <span className={this.passwordMatch() && this.state.password.length > 0 ? "good" : "bad"}>Passwords must match.</span>
                        </div>
                </div>
            )
        }
    }
}

export default SessionForm