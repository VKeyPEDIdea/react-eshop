import React from 'react';

import classes from './NavigationTree.module.sass';
import NavigationTreeNode from './NavigationTreeNode/NavigationTreeNode';
import { withRouter } from 'react-router';
import { location } from '../../../services/locationService';

const NavigationTree = props => {
	// const [selectedNodeList, nodeList] = setTree(props.tree);
	let selectedNodeList = [];
	let nodeList = [];
	
	function setTree(list) {
		// console.log('Categories', list);
		const selected = location.getSelected(props.location.search);
		const current = selected[selected.length - 1];
		let parent = current ? current : null;
		const isSelected = (node) => selected.includes(node.id) || node.id === current;
		Object.values(list)
			.filter(node => selected.includes(node.id) || node.parent_id === parent)
			.forEach(node => {
				let element = <NavigationTreeNode
					key={node.id}
					title={node.name}
					click={() => props.click(node.id)}
					selected={isSelected(node)}
				/>;
			
				if (isSelected(node)) {
					selectedNodeList.push(element);
					parent = current;
				} else {
					nodeList.push(element);
				};
			}
		);
	};
	
	setTree(props.fullList);

	return (
		<>
			<nav className={classes.NavigationTree}>
				<ul>
					{selectedNodeList}
					{nodeList}
				</ul>
			</nav>
		</>
	);
};

export default withRouter(NavigationTree);