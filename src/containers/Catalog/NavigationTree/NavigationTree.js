import React, { useEffect } from 'react';

import classes from './NavigationTree.module.sass';
import NavigationTreeNode from './NavigationTreeNode/NavigationTreeNode';
import { withRouter } from 'react-router';
import { location } from '../../../services/locationService';
import { connect } from 'react-redux';
import * as actions from '../../../store/';

const NavigationTree = props => {
	const { initCategories, categories } = props;
	const [ selectedNodeList, nodeList ] = setTree(categories);

	useEffect(() => {
		initCategories();
	}, [initCategories]);
	
	function setTree(list) {
		let selectedNodes = [];
		let normalNodes = [];
		const selected = location.getSelected(props.location.pathname);
		const current = selected[selected.length - 1];
		let parent = current ? current : '';
		const isSelected = node => selected.includes(node.id) || node.id === current;
		Object.values(list)
			.filter(node => selected.includes(node.id) || node.parent_id === parent)
			.forEach(node => {
				let element = <NavigationTreeNode
					key={node.id}
					id={node.id}
					title={node.name}
					rootPath={props.location.pathname}
					selected={isSelected(node)}
				/>;
				console.log(node);
			
				if (isSelected(node)) {
					selectedNodes.push(element);
					parent = current;
				} else {
					normalNodes.push(element);
				};
			}
		);

		return [ selectedNodes, normalNodes ];
	};
	
	
	return (
		<>
			<nav className={classes.navigationTree}>
				<ul>
					{selectedNodeList}
					{nodeList}
				</ul>
			</nav>
		</>
	);
};

const mapStateToProps = state => {
	return {
		categories: state.categories.categories,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initCategories: () => dispatch(actions.initCategories()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationTree));