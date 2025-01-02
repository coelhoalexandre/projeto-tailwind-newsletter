import { useState } from "react";

import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);

  return (
    <div className="h-screen">
      {hasUser ? (
        <>
          <Header user={user} /> <ArticleList />{" "}
        </>
      ) : (
        <Form onSubmit={setUser} />
      )}
    </div>
  );
}

export default App;
