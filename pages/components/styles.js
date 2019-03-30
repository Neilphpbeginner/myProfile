const drawerWidth = 100;

export const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        paddingLeft: 20,
        paddingTop: 65,
        margin: 'auto'
    },
    toolbar: theme.mixins.toolbar,
    cvHeading: {
        textAlign: 'center',
    },
    link: {
        textDecoration: 'none'
    },
    profileGitHub: {
        float: 'right',
        margin: 5
    },
    spaceBetweenIcons: {
        padding: 7,
        margin: 'auto'
    },
    listItems: {
        margin: 'auto',
        padding: 20
    }
});
