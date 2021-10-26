import React, { useEffect, useState } from 'react';
import { Row, Col, FormGroup, Label, Input, } from 'reactstrap';
import CommonUtils from '../../utils/CommonUtils';
import './home.css';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	useEffect(() => {
		CommonUtils.getPosts().then(res => {
			if (res.data) {
				setPosts(res.data);
				setTitle(res.data[0].title);
				setBody(res.data[0].body);
			} else {
				setPosts([]);
				return false;
			}
		});
	}, []);

	const updateDetails = (x) => {
		setTitle(x.title);
		setBody(x.body);
	}
	return (
		<div className="mt-5 mb-5 notesContainer">
			<h2 className="heading mb-0">Notes</h2>
			<Row>
				<Col xs={4} className="leftBlock pr-0">
					{posts && posts.length > 0 && posts.map((x, i) => {
						return <div key={i} className={`leftBlockDetail pt-2 ${x.title === title ? 'active' : ''}`} onClick={(e) => updateDetails(x)}>
							<Row>
								<Col xs={9} className="leftTitle px-4">
								{x.title.length > 150 ? `${x.title.substring(0, 150)}...` : x.title}
								</Col>
							</Row>
							<Row className="leftBody px-4 mb-2" title={x.body}>
								{x.body.length > 20 ? `${x.body.substring(0, 150)}...` : x.body}
							</Row>
						</div>
					})}

				</Col>
				<Col xs={8} className="w-100 pr-5 pl-4">
					<FormGroup>
						<Label for="title" className="font-weight-bold mt-3">Title:</Label>
						<Input name="title" placeholder="Title of Notes"
							value={title}
							disabled
							onChange={() => { }} />
					</FormGroup>
					<FormGroup>
						<Label for="body" className="font-weight-bold">Body:</Label>
						<Input type="textarea" name="body" rows={13}
							disabled
							value={body}
							onChange={() => { }}
							placeholder="Enter Discription" />
					</FormGroup>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
