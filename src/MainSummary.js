import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryTotal from './SummaryTotal';

class MainSummary extends React.Component {

    render() {

        const summary = Object.keys(this.props.selected)
            .map(key => (
                <SummaryOption 
                    key={key} 
                    label={key}
                    name={this.props.selected[key].name} 
                    cost={this.props.selected[key].cost}/>
                )
            );
             
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <SummaryTotal selected={this.props.selected}/>
            </section>
        )
    }

}

export default MainSummary;