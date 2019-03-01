import { Component } from 'react';
import quotes from './quotes.js';
import './App.scss';

class Quote extends Component {
    render () {
        return (
            <blockquote>
                <p class="lead">{this.props.quote}</p>
                <footer class="text-right">{this.props.quoteAuthor}</footer>
            </blockquote>);
    }
}

class NextButton extends Component {
    render () {
        return (<div class="rightAlignment">
            <input type="button"
                onClick={() => this.props.onClick()}
                name="nextQuote"
                value="Next"
                class="btn btn-primary btn-md"
                align="right"/>
        </div>);
    }
}

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            quote: quotes[getQuoteId()],
            quoteAuthor: 'The Great N.'
        };
    }

    handleClick () {
        this.setState({
            quote: quotes[getQuoteId()],
            quoteAuthor: 'The Great N.'
        });
    }

    render () {
        return (
            <div class="container">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" data-toggle="modal" data-target="#notImplemented">
                        <span class="glyphicon glyphicon-user"></span> Sign Up</a>
                    </li>
                    <li><a href="#" data-toggle="modal" data-target="#notImplemented">
                        <span class="glyphicon glyphicon-log-in"></span> Login</a>
                    </li>
                </ul>
                <div class="modal fade" id="notImplemented" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Sign Up/Login</h4>
                            </div>
                            <div class="modal-body">
                                <p>Sooner or later will be implemented :)</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-header">
                    <h1>Board of quotes</h1>
                </div>
                <div id="quoteContainer" class="jumbotron">
                    <Quote quote={this.state.quote} quoteAuthor={this.state.quoteAuthor}/>
                </div>
                <NextButton onClick={() => this.handleClick()}/>
            </div>
        );
    }
}

function getQuoteId () {
    return Math.floor(Math.random() * quotes.length);
}

export default App;
