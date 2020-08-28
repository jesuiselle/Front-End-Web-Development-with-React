import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

    function RenderComments({comments}) {
        if (comments != null) {

            const commentsList = comments.map((comment)=>{

                return(
                    <li key={comment.id} >
                        <div>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
                <div>
                </div>
            )
        }
    }

    function RenderDish({dish}) {
        if(dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish && props.dish.comments} />
                </div>
            </div>
            </div>
        );
    }

export default DishDetail;