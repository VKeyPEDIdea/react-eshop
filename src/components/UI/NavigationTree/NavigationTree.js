import React from 'react';

import classes from './NavigationTree.module.sass';
import NavigationTreeNode from './NavigationTreeNode/NavigationTreeNode';

const NavigationTree = props => {
	// const [selectedNodeList, nodeList] = setTree(props.tree);
	let selectedNodeList = [];
	let nodeList = [];

	function setTree(list) {
		console.log(list);

		Object.values(list)
			.forEach(node => {
				let element = <NavigationTreeNode
					key={node.id}
					title={node.title}
					selected={node.selected}
					click={() => props.click(node.id)}/>;
			
			if (node.selected && node.children) {
				selectedNodeList.push(element);
				nodeList = [];
				return setTree(node.children);
			} else {
				nodeList.push(element);
			}
		});
		// return [selectedNodeList, nodeList];
	};

	setTree(props.tree);

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

export default NavigationTree;