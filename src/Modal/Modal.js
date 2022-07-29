import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state = {
        isOpen: false,
    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({isOpen: true})} style={{marginBottom: '1rem'}}
                        className='btn btn-success btn-sm'>Open modal
                </button>

                {this.state.isOpen ? (<div className='mmm'>
                    <div className='mmm-b'>
                        <h1>Modal title</h1>
                        <p>Awesome modal ;)</p>
                        <button onClick={() => this.setState({isOpen: false})} className='btn btn-info'>Close modal
                        </button>
                    </div>
                </div>) : null}
            </>
        )
    }
}