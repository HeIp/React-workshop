import React, { Component, Fragment, useState } from 'react'
import { nameValidator, ageValidator, urlValidator } from '../../utils'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

export default class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: 0,
            img: '',
            people: [],
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, age, img, people } = this.state
        const valid = nameValidator(name).valid && ageValidator(age).valid && urlValidator(img).valid

        if (valid) {
            const person = { name, age, img }
            const newPeople = [...people].concat([person])
            this.setState({ people: newPeople, name: '', age: 0, img: '' })
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <form>
                        <Input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} validator={nameValidator} />
                        <Input type='text' name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} validator={ageValidator} />
                        <Input type='text' name='img' placeholder='image url' value={this.state.img} onChange={this.handleChange} validator={urlValidator} />
                        <button onClick={this.handleSubmit}>Click me</button>
                    </form>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    {this.state.people.map((person) => {
                        return (
                            <div style={{ margin: 10, width: '30%' }}>
                                <CoolCard name={person.name} age={person.age} img={person.img} />
                            </div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}

function Input(props) {
    const [error, setError] = useState('')
    function handleChange(e) {
        let theErr = ''
        if (props.validator) {
            const { valid, error } = props.validator(e.target.value)
            theErr = valid ? '' : error
        }

        if (props.onChange) props.onChange(e)
        setError(theErr)
    }
    return (
        <Fragment>
            <input type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={handleChange} />
            <p>{error}</p>
        </Fragment>
    )
}


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
}));

function CoolCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Image height='300' src={props.img} />
            <CardContent>
                <Typography>
                    name: {props.name}
                </Typography>
                <Typography>
                    age: {props.age}
                </Typography>
            </CardContent>
        </Card>
    );
}

function Image(props) {
    const [grow, setGrow] = useState(false)

    return (
        <img onClick={() => setGrow(!grow)} src={props.src} height={grow ? '150' : '100'} />
    )
}

// 