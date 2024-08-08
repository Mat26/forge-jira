import ForgeUI, { Fragment, Text, Button, useState } from '@forge/ui';
import { fetchDescription } from '../api/issueApi.jsx';
import { parseDescription } from '../utils/util.jsx';

const LoadDescriptionButton = () => {
    const [descriptionData, setDescriptionData] = useState({
        description: '',
        acceptanceCriteria: []
    });

    const handleClick = async () => {
        const data = await fetchDescription();
        const paragraphText = parseDescription(data.fields.description.content);
        setDescriptionData(paragraphText);
    };

    return (
        <Fragment>
            <Button text="Load Description" onClick={handleClick} />
            {descriptionData && (
                <Fragment>
                    <Text>{descriptionData.description}</Text>
                    <Text>Acceptance Criteria:</Text>
                    {descriptionData.acceptanceCriteria.map((criterion, index) => (
                        <Text key={index}>{criterion}</Text>
                    ))}
                </Fragment>
            )}
        </Fragment>
    );
};

export default LoadDescriptionButton;
