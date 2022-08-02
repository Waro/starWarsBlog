import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Scrollbars } from 'react-custom-scrollbars-2';


import "../../styles/home.css";

export const Home = () => (
	<div>
	<Scrollbars style={{ width: 500, height: 300 }}> 
		<CardGroup> 
			<Card className="m-3">
				<Card.Img variant="top" src="https://picsum.photos/400/200" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card className="m-3">
				<Card.Img variant="top" src="https://picsum.photos/400/200" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card className="m-3">
				<Card.Img variant="top" src="https://picsum.photos/400/200" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card className="m-3">
				<Card.Img variant="top" src="https://picsum.photos/400/200" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
			<Card className="m-3">
				<Card.Img variant="top" src="https://picsum.photos/400/200" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</CardGroup>
	</Scrollbars>
	</div>
)
