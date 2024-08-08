import ForgeUI, { render, Fragment, IssuePanel } from '@forge/ui';
import LoadDescriptionButton from './components/loadDescriptionButton';
import PokemonButton from './components/PokemonButton';
import CreateIssueButton from './components/createIssueButton';


const App = () => {

  return (
    <Fragment>
      <LoadDescriptionButton></LoadDescriptionButton>
      <PokemonButton></PokemonButton>
      <CreateIssueButton></CreateIssueButton>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
