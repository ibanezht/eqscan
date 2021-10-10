import React from "react";

interface Props {
  layout: React.ElementType;
  page: React.ElementType;
}

const Container = (props: Props) => {
  // const username = useSelector(
  //   (state: SystemState) => state.system.username,
  //   shallowEqual,
  // );
  // const dispatch = useDispatch();
  // const { layout: Layout, page: Page } = props;
  //
  // Auth.currentAuthenticatedUser().then(data =>
  //   // dispatch(loggedIn({ isLoggedIn: true, username: data.getUsername() })),
  // );

  return (
    // <Connect
    //   query={graphqlOperation(queries.listProducers, {
    //     cognitoID: { eq: username },
    //   })}
    // >
    //   {({ data, loading, errors }: ConnectParams) => {
    //     if (errors.length > 0) {
    //       return <h3>Error</h3>;
    //     }
    //     if (loading) return <Loading />;
    //
    //     const credentials = getCredentials(data);
    //     return (
    //       <Layout>
    //         <Page credentials={credentials} />
    //       </Layout>
    //     );
    //   }}
    // </Connect>
    <div />
  );
};

export default Container;
