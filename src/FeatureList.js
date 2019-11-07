import React from 'react';
import FeatureItem  from './FeatureItem';

class FeatureList extends React.Component {
    
    render() {
        const featureItems = this.props.features.map((item, index) => {
            return (
                <FeatureItem 
                    key={index} 
                    name={item.name} 
                    featureName={this.props.name}
                    cost={item.cost} 
                    selected={this.props.selected[this.props.name]} 
                    item={item} 
                    handleUpdate={this.props.handleUpdate}
                />
            )
        });

        return(
            <ul className="feature__list">
                { featureItems }
            </ul>
        )
    }
}

export default FeatureList