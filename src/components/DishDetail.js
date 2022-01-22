/*import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { List, ListGroupItem } from "reactstrap";
import {COMMENTS} from '../shared/comments';


	function RenderDish({dish}){

		if (dish != null) {

			return (
				<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" src={dish.image} 
					alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
				</div>
				);
		
	} else {

		return <div></div>;
	}

}

function RenderComments({comments, dish}) {

	if (dish != null) {

		return (
			
			<div className = "col-12 col-md-5 m-1">
			<div className="container">
			<h4>Comments</h4>
			{comments.map(comment => (
				<ul className="list-unstyled" key={comment.id}>
				<li>{comment.comment}</li>
				<li>{comment.author} --
				{new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
				</ul>
			)
			)}
			</div>
			</div>

		);

	} else {

		<div></div>
	}

	} 


	const DishDetail = ({dish}) => {

				return (
				<div className="container">
				<div className="row">
			
				<RenderDish dish={dish} />
				<RenderComments comments={dish.comments} />
				</div>

				</div>	

			);
		

	}


export default DishDetail;*/


import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { List, ListGroupItem } from "reactstrap";
import {COMMENTS} from '../shared/comments';




	function RenderDish({dish}){

		if (this.props.dish != null) {

			return (
				<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" src={this.props.dish.image} 
					alt={this.props.dish.name} />
					<CardBody>
						<CardTitle>{this.props.dish.name}</CardTitle>
						<CardText>{this.props.dish.description}</CardText>
					</CardBody>
				</Card>
				</div>
				);
		
	} else {

		return <div></div>;
	}

}

function RenderComments({comments}) {

	

		return (
			
			<div className = "col-12 col-md-5 m-1">
			<div className="container">
			<h4>Comments</h4>
			{this.props.dish.comments.map(comment => (
				<ul class="list-unstyled">
				<li key={comment.id}>{comment.comment}</li>
				<li key={comment.id}>{comment.author} --
				{new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
				</ul>
			)
			)}
			</div>
			</div>

		);

	
	} 


	const DishDetail = (props) => {

		if (props.dish != null) {

				return (
				<div className="container">
				<div className="row">
			
				<RenderDish dish={props.dish} />
				<RenderComments comments = {props.dish.comments} />
				</div>

				</div>	

			);

		} else {

		<div></div>
		}

	}


export default DishDetail;