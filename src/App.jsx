import { I18nextProvider } from "react-i18next";

import { Router } from "./pages/Router";

import i18n from "./translations/i18n";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  );
};

export default App;
