import React from 'react'
import ReactDOM from 'react-dom'
import { login, logout } from './utils/session_utils'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    ReactDOM.render(<h1>Working</h1>, root)

    window.login = login
    window.logout = logout
})