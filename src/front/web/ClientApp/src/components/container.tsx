import React, { FC } from "react";
import { useDispatch } from "react-redux";

interface Props {
  layout: React.ElementType;
  page: React.ElementType;
}

const Container: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const { layout: Layout, page: Page } = props;

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
