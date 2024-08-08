import api, { route } from '@forge/api';
import { useProductContext } from '@forge/ui';
import { BODY_ISSUE } from '../api/bodies/issueBody';

export const useFectchIssue = async () => {
        const response = await api.asUser().requestJira(route`/rest/api/3/issue`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: BODY_ISSUE
        });
        console.log(`Response: ${response.status} ${response.statusText}`);
        console.log(await response.json());
}

export const fetchDescription = async () => {
    const context = useProductContext();
    const issueKey = context.platformContext.issueKey;
    const response = await api.asUser().requestJira(route`/rest/api/3/issue/${issueKey}?fields=description`, {
        headers: {
            'Accept': 'application/json'
        }
    });
    return await response.json();
};