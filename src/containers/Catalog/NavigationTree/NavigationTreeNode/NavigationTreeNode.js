import React from 'react';
import { Link } from 'react-router-dom';
import { location } from '../../../../services/locationService';
import classes from './NavigationTreeNode.module.scss';

const navigationTreeNode = props => {
	let styles = [classes.navigationTreeNode];
	let path = '';

	if (props.selected) {
		styles.push(classes.selected);
		styles = styles.join(' ');
		path = location.getDirectory(props.rootPath, props.id);
	} else {
		path = props.rootPath + '/' + props.id;
	}

	return(
		<Link 
			to={path}
			className={styles}>
			{props.title}
			<i className={'material-icons'}>chevron_right</i>
		</Link>
	);
}

export default navigationTreeNode;