import React, { useEffect } from 'react';
import classes from './Catalog.module.sass';
import NavigationTree from '../../components/UI/NavigationTree/NavigationTree';
import ProductList from './ProductList/ProductList';
import { connect } from 'react-redux';
import * as actions from '../../store';

const Catalog = props => {
	const { initCategories } = props;

	useEffect(() => {
		initCategories();
	}, [initCategories]);
	
	return(
		<div className={classes['row2--1-3']}>
			<NavigationTree
				tree={props.categories}
				click={props.setCategory}/>
			<ProductList />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		categories: state.catalog.categories,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setCategory: id => dispatch(actions.setCategory(id)),
		initCategories: () => dispatch(actions.initCategories()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);