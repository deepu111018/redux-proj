import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },

  mainContainer: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 250,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHeight: 400,
    margin: 10,
  },
  media: {
    height: 140,
  },

  title: {
    flexGrow: 1,
  },
}));
