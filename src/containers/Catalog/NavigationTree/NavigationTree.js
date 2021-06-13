import React, { useEffect } from 'react';
import classes from './NavigationTree.module.sass';
import NavigationTreeNode from './NavigationTreeNode/NavigationTreeNode';
import { withRouter } from 'react-router';
import { location } from '../../../services/locationService';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesList, fetchCategories } from './categoriesSlice';

const NavigationTree = props => {
	const dispatch = useDispatch();
	const categories = useSelector(selectCategoriesList);
	
	useEffect(() => {
		dispatch(fetchCategories());
	}, [fetchCategories]);

	const [ selectedNodeList, nodeList ] = setTree(categories);
	
	function setTree(list) {
		let selectedNodes = [];
		let normalNodes = [];
		const selected = location.getSelected(props.location.pathname);
		const current = selected[selected.length - 1];
		let parent = current ? current : '';
		const isSelected = ({ id }) => selected.includes(id) || id === current;
		Object.values(list)
			.filter(({ id, parent_id }) => selected.includes(id) || parent_id === parent)
			.forEach(node => {
				let element = <NavigationTreeNode
					key={node.id}
					id={node.id}
					title={node.name}
					rootPath={props.location.pathname}
					selected={isSelected(node)}
				/>;
			
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

export default withRouter(NavigationTree);