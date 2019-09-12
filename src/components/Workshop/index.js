import React, { Fragment, Component } from 'react'

export default class Workshop extends Component {

    render() {
        return (
            <Fragment>
                <form>
                    <input name='name' placeholder='name' />
                    <button>click me</button>
                </form>
            </Fragment>
        )
    }
}