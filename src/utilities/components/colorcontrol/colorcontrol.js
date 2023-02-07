import './colorcontrol.scss';
import { ColorIndicator, Popover, ColorPicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
const ColorControl = ({ label, colorName, colorValue, setAttributes }) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className="agb-color-wrapper">
			<div className="color-header">
				<div className="scb-label">{label}</div>
				<button
					className="color-indicator"
					onClick={() => setVisible(true)}
				>
					<ColorIndicator colorValue={colorValue} />
				</button>
			</div>
			{visible && (
				<Popover
					onFocusOutside={() => setVisible(false)}
					position="bottom left"
				>
					<div className="color-picker">
						<ColorPicker
							color={colorName}
							onChangeComplete={(value) =>
								setAttributes({ [colorName]: value.hex })
							}
							disableAlpha
						/>
					</div>
					<button
						onClick={() =>
							setAttributes({
								[colorName]: '',
							})
						}
						className="scb-clear-button"
					>
						{__('Clear', 'simple-card-block')}
					</button>
				</Popover>
			)}
		</div>
	);
};

export default ColorControl;
