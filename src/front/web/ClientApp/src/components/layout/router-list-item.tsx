import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

interface Props {
  to: string;
  primary: string;
  icon: JSX.Element;
  selected: boolean;
  onClick: () => void;
}

const RouterListItem: FC<Props> = (props: Props) => {
  const { to, primary, icon, selected, onClick } = props;
  // eslint-disable-next-line react/display-name
  const forwardRef = React.forwardRef<
    HTMLAnchorElement,
    Omit<LinkProps, "innerRef" | "to">
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  >((props, ref) => <Link innerRef={ref as any} to={to} {...props} />);
  return (
    <ListItem
      button
      component={forwardRef}
      selected={selected}
      onClick={() => onClick()}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default RouterListItem;
