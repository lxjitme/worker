import React,{Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';

class Main extends Component{

	constructor(props){
		super(props);
		this.state = {
			movies:[],
			name:'',
			type:''
		}
	}

	componentWillMount(){
		axios.get('../app/json/top250.json')
		.then(response=>{
			//console.log(response);
			this.setState({
				movies:response.data.subjects
			});
		})
		.catch(error=>{

		})
	}

	render(){
		return (
			<div>
				{
					this.state.movies.map((item,key)=>{
						return (
							<Col span={4} key={key}>
								<img style={{height:'150px',width:'120px'}} src={item.images.small} />
								<h3 style={{width:'120px',height:'60px'}}>{item.title}</h3>
								<h3>{item.genres[0]}&nbsp;&nbsp;{item.genres[1]}&nbsp;&nbsp;{item.genres[2]}</h3>
							</Col>
						)
					})
				}
			</div>
		)
	}
}

export default Main;