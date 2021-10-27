import React, { FC } from "react";
//import { useDispatch } from "react-redux";

interface Props {
  layout: React.ElementType;
  page: React.ElementType;
  title: string;
}

const Container: FC<Props> = (props: Props) => {
  //const dispatch = useDispatch();
  const { layout: Layout, page: Page, title } = props;

  return (
    <Layout title={title}>
      <Page />
    </Layout>
  );
};

export default Container;
