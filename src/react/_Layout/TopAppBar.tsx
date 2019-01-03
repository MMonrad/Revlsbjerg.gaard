import { Component } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { withNamespaces, TransProps } from 'react-i18next'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        background: "#ffffff",
    },
    appBar: {
        "marginTop": "30px",
        background: "#ffffff",
    },
    title: {
        flexGrow: 1,
        "marginLeft": "20%",
    },
    tabs: {
        flexGrow: 1,
        "marginRight": "20%",
    },
});

interface ITopAppBarProps {
    classes?: {
      root: any;
      appBar: any;
      title: any;
      tabs: any;
    }
  }

  type Props = ITopAppBarProps & TransProps;

@(withStyles(styles) as any)
@(withNamespaces("global") as any)
export default class TopAppBar extends Component<Props> {
    constructor(props: ITopAppBarProps) {
        super(props)
    }

    render() {
        const { classes, t } = this.props;

        return (
            <div className={classes.root}>
                <Toolbar className={classes.appBar} >
                    <Typography variant="h6" color="inherit" className={classes.title}>{t("title")}</Typography>
                    <Tabs className={classes.tabs}
                        value={0}
                        // onChange={this.handleChange}
                        indicatorColor="#000000"
                        textColor="#000000"
                        centered>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Toolbar>
            </div>
        );
    }
}