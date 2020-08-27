import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component{

    renderComments(comments) {
        if (comments != null) {

            const commentsList = comments.map((comment)=>{

                return(
                    <li key={comment.id} >
                        <div>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},
                                {comment.date}</p>
                        </div>
                    </li>

                )
            })

            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsList}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;