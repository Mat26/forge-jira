import ForgeUI, { Fragment, Button } from '@forge/ui';
import { useFectchIssue } from '../api/issueApi';

const createIssueButton = () => {

    const handleClick = async () => {
        useFectchIssue();
    };

    return (
        <Fragment>
            <Button text="Create Issue" onClick={handleClick} />
        </Fragment>
    )
}

export default createIssueButton;