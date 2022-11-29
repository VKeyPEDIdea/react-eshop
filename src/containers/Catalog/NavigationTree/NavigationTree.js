import React, { useEffect } from 'react';
import classes from './NavigationTree.module.scss';
import NavigationTreeNode from './NavigationTreeNode';
import { location } from '../../../services/locationService';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesList, fetchCategories } from './categoriesSlice';
import { useHistory } from 'react-router-dom';

const NavigationTree = props => {
	const dispatch = useDispatch();
	const categories = useSelector(selectCategoriesList);
	const pathname = useHistory().location.pathname;
	
	useEffect(() => {
		dispatch(fetchCategories());
	}, [fetchCategories]);

	const [ selectedNodeList, nodeList ] = setTree(categories);
	
	function setTree(list) {
		let selectedNodes = [];
		let normalNodes = [];
		const selected = location.getSelected(pathname);
		const current = selected[selected.length - 1];
		let parent = current ? current : '';
		const isSelected = ({ id }) => selected.includes(id) || id === current;
		list.filter(({ id, parent_id }) => selected.includes(id) || parent_id === parent)
			.forEach(node => {
				let element = <NavigationTreeNode
					key={node.id}
					id={node.id}
					title={node.name}
					rootPath={pathname}
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

export default NavigationTree;