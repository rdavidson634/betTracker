import React, {Component} from 'react';


class AddBetForm extends Component {
    state = {
        invalidForm: true, 
        formData: {
            game: null,
            team: null,
            type: null,
            odds: null,
            amount: null
        }
    };

    formRef = React.createRef();

    handleSubmit = b => {
        b.preventDefault();
        this.props.handleAddBet(this.state.formData)
    }

    handleChange = b => {
        const formData = {...this.state.formData,
        [b.target.game]: b.target.value
        };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <form ref={this.formRef} onSubmit={this.handleSubmit} className="form-row">
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="game"
                            value={this.state.formData.game}
                            onChange={this.handleChange}
                            required
                            placeholder="Game"
                        />
                    </div>
                    
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="team"
                            value={this.state.formData.team}
                            onChange={this.handleChange}
                            required
                            placeholder="Team"
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="type"
                            value={this.state.formData.type}
                            onChange={this.handleChange}
                            required
                            placeholder="Type"
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="odds"
                            value={this.state.formData.odds}
                            onChange={this.handleChange}
                            required
                            placeholder="Odds"
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            className="form-control"
                            name="amount"
                            value={this.state.formData.amount}
                            onChange={this.handleChange}
                            required
                            placeholder="Amount"
                        />
                    </div>
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </form>
            </>
        )
    }
}

export default AddBetForm;