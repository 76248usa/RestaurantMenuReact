import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { List, ListGroupItem } from "reactstrap";
import {COMMENTS} from '../shared/comments';



class DishDetail extends React.Component {

	constructor(props){
		super(props);

		this.state = {

		comments: [

{
	id: '1',
	text: 'Imagine all the eatables, living in confusion!',
	name: '-- John Lemmon, Oct 17, 2012'

},
{
	id: '2',
	text: 'Sends anyone to heaven -- I wish I could get my mother-in-law to eat it',
	name: '-- Paul McVites, Sep 06, 2014'

},
{
	id: '3',
	text: 'Eat it, just eat it!',
	name: '-- Michael Jaikisan, Feb 14, 2015'
},
{
	id: '4',
	text: 'Ultimate reaching for the stars',
	name: '-- Ringo Starry, Dec 03, 2013'
},
{
	id: '5',
	text: 'It is your birthday! We are going to party',
	name: '-- 25 Cent, Dec 03, 2011'
}

]
		}
	}

	componentDidMount(){

		
	}

	renderSelectedDish(){

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

renderComments() {

	if (this.props.dish != null) {

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

	} else {

		<div></div>
	}

	} 


	render(){

		

				return (
				<div className="container">
				<div className="row">
			
				{this.renderSelectedDish()}
				{this.renderComments()}
				</div>

				</div>	

			);
		

	}
}

export default DishDetail;