import { TextControl } from '@wordpress/components';
const FeatureList = (attributes, setAttributes) => {
	const { featureList } = attributes;
	return (
		<div>
			<button
				onClick={() =>
					setAttributes({
						featureList: [
							...featureList,
							{
								id: featureList.length + 1,
								feature: 'Add New',
							},
						],
					})
				}
			>
				Add New Item
			</button>
			{featureList &&
				featureList.map((item, index) => {
					return (
						<div key={index}>
							<TextControl
								label="Add Title"
								value={item.feature}
								onChange={(value) => {
									const newTitles = [...featureList];
									newTitles[index].feature = value;
									setAttributes({
										featureList: newTitles,
									});
								}}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default FeatureList;
