import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import { getAllItems, updateItem } from './actions/bucket_list_item_actions'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}/>, root)
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.getAllItems = getAllItems
    window.updateItem = updateItem
})

