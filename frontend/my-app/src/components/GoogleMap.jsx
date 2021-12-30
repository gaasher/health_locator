

import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import './GoogleMap.css'

export default class AutocompleteLocation extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }



  handleChange = address => {
    this.setState({ address });
    this.props.updateSearchData( address );

  };

  handleSelect = address => {
    this.setState({ address});
    this.props.updateSearchData( address );
  };


  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}

      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='inputbox'> 
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div style={{
              }}></div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#f5f1d2', cursor: 'pointer' }
                  : { backgroundColor: '#fcfbf4', cursor: 'pointer' };
                return (
                  <div className="input-suggestion"
                  {...getSuggestionItemProps(suggestion, {
                    
                    style,
                  })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}