import React from 'react';
import classes from './NavigationTreeNode.module.sass';

const navigationTreeNode = props => {
	let styles = [classes.NavigationTreeNode];
	
	if (props.selected) {
		styles.push(classes.selected);
		styles = styles.join(' ');
	}

	return(
		<li
			className={styles}
			onClick={props.click}>
				{props.title}
				<i className="material-icons">chevron_right</i>
		</li>
	);
}

export default navigationTreeNode;