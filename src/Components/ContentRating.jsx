
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0
        };

        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    handleLike() {
        this.setState(prev => ({ likes: prev.likes + 1 }));
    }

    handleDislike() {
        this.setState(prev => ({ dislikes: prev.dislikes + 1 }));
    }

    render() {
        const { likes, dislikes } = this.state;

        return (
            <div className="content-rating">
                <h2 style={{marginBottom: '16px', color: '#6366f1', fontWeight: 700, fontSize: '2rem'}}>Content Rating</h2>
                <p style={{fontSize: '1.15rem', color: '#374151', marginBottom: '8px', maxWidth: '400px'}}>
                    “First, solve the problem. Then, write the code.”
                </p>
                <div className="rating-buttons">
                    <button className="like-button" onClick={this.handleLike} aria-label="Like">
                        👍 Like <span style={{fontWeight: 700}}>({likes})</span>
                    </button>
                    <button className="dislike-button" onClick={this.handleDislike} aria-label="Dislike">
                        👎 Dislike <span style={{fontWeight: 700}}>({dislikes})</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default ContentRating;
