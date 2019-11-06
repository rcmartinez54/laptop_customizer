import React from 'react';
import Feature from './Feature';

class Form extends React.Component {
    render() {
        const features = Object.keys(this.props.features)
            .map(key => <Feature key={key} name={key} features={this.props.features[key]} handleUpdate={this.props.handleUpdate} selected={this.props.selected}/>);

        return(
            <section className="main__form">
                <h3>here is my h3</h3>
                {features}
            </section>
        )
    }
}

export default Form;