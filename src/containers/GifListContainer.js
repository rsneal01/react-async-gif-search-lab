import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: []
      }

    render(){
        <div>
            <GifSearch gifFetch={this.gifFetch} />
            <GifList gifs={this.state.gifs} />
        </div>
    }

    componentDidMount(){
        this.gifFetch()
    }

    gifFetch = () => {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
            .then(response => response.json())
            .then(({data}) => {
                this.setState({gifs: data.map(gif => ({url: gif.images.original.url}) ) })
        })
    }
    
}

export default GifListContainer