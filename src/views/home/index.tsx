import React from 'react'

interface IProps {}

export default class Home extends React.Component {
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }
    render() {
        return <div>this is Home</div>
    }
}
