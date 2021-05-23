import React, { useState } from 'react';
import classes from './InputSelect.module.sass';

const InputSelect= props => {
	const {
		label,
		optionList,
	} = props;

	const [isOpened, setIsOpened] = useState(false);
	const [content, setContent] = useState('Не выбрано');

	const getOptionListStyles = openState => {
		let styles = [classes.list];
		if (!openState) styles.push(classes.d_none); 
		return styles.join(' ');
	};

	const getOptionList = options => {
		return options.map(optionText => {
			return <li
				key={optionText}
				onClick={() => setContent(optionText)}
				className={classes.option}>{optionText}</li>;
		});
	};

	return(
		<div
			className={classes.inputSelect}
			onClick={() => setIsOpened(!isOpened)}>
			<label htmlFor="" className={classes.label}>{label}</label>
			<div
				className={classes.field}
				value={content}>{content}</div>
			<div className={classes.arrow}>
				<i className="material-icons"
					style={isOpened ? {transform: 'rotate(180deg)'} : null}>arrow_drop_down</i>
			</div>
			<ul className={getOptionListStyles(isOpened)}>
				{getOptionList(optionList)}
			</ul>
		</div>
	);
}

export default InputSelect;