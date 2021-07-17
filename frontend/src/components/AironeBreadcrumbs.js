import { Breadcrumbs } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: grey[300],
  },
}));

export default function AironeBreadcrumbs(props) {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      {props.children}
    </Breadcrumbs>
  );
}
