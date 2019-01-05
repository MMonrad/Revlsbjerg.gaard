import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as H from 'history';
import { withStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { withNamespaces, TransProps } from 'react-i18next'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export enum PageEnum {
    frontpage = "frontpage",
    contact = "contact"
}

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
    tab: {
        fontSize: "20px",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        "font-weight": "500",
        display: "block",
        "lineHeight": "1.6",
        "letterSpacing": "0.0075em",
    }
});

interface ITopAppBarProps {
    classes?: {
      root: any;
      appBar: any;
      title: any;
      tabs: any;
      tab: any;
    },
    history?: H.History;
    location?: H.Location;
  }

  interface ITopAppBarStates {
    page: PageEnum;
  }

  type Props = ITopAppBarProps & TransProps;

@(withRouter as any)
@(withStyles(styles) as any)
@(withNamespaces("global") as any)
export default class TopAppBar extends Component<Props, ITopAppBarStates> {

    constructor(props: ITopAppBarProps) {
        super(props)

        this.state = {
            page: PageEnum.frontpage
        }
    }

    handleChange = (event: React.ChangeEvent<{}>, value: any) => {
        const page = value as PageEnum;
        const {history, location} = this.props;

        if (location.pathname.startsWith("/" + page.toString())) {
            return;
        }

        this.setState({page: page});

        if(page === PageEnum.frontpage){
            history.push("")
            return;
        }

        history.push("/" + page.toString())
    }

    componentDidMount(){
        const { history, location} = this.props;
        const page = location.pathname.split("/");

        if (location.pathname.startsWith("/" + page.toString())) {
            return;
        }

        history.push("/" + page[1])
        this.setState({page: page[1 ] as PageEnum});
    }

    render() {
        const { classes, t } = this.props;
        const { page } = this.state;

        return (
            <div className={classes.root}>
                <Toolbar className={classes.appBar} >
                    <Typography variant="h6" color="inherit" className={classes.title}>{t("title")}</Typography>
                    <Tabs className={classes.tabs}
                        value={page.toString()}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        centered>
                        <Tab value={PageEnum.frontpage.toString()} label={t("frontpage")} className={classes.tab}/>
                        <Tab value={PageEnum.contact.toString()} label={t("contact")}  className={classes.tab}/>
                    </Tabs>
                </Toolbar>
            </div>
        );
    }
}