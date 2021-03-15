import React from 'react';

import classes from './NavigationTree.module.sass';
import NavigationTreeNode from './NavigationTreeNode/NavigationTreeNode';

// Сделать сервис API для совершения запросов на сервер
// Парсить с URL список выбранных категорий, взамен sessionRediucer
// queryString
// URLSearchParams

const NavigationTree = props => {
	// const [selectedNodeList, nodeList] = setTree(props.tree);
	let selectedNodeList = [];
	let nodeList = [];

	function setTree(list) {
		console.log(list);

		Object.values(list)
			.sort(cat => cat.parent_id !== null)
			.forEach(node => {
				let element = <NavigationTreeNode
					key={node.id}
					title={node.name}
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