import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import { TimePicker } from 'material-ui-pickers'
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import ismobile from 'ismobilejs';
import moment from 'moment';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#607d8b',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    '& a': {
      color: blue[500],
    }
  },
  column: {
    flexBasis: '33.3%',
    display: 'flex',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.text.lightDivider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary[500],
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  button: {
    backgroundColor: red[900],
  },
  bar: {
    height: '100%',
    width: 10,
    marginRight: 5,
  },
  kind: {
    marginRight: 5,
  }
});

class Activity extends React.Component {

  pattern = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/ig

  replaceStringToURL = url => (`<a target="_blank" href="${url}">${url}</a>`)

  transformLink = description => (description.replace(this.pattern, this.replaceStringToURL))

  handleTimeChange = (date) => {
    this.props.onChange({loggedAt: date.format('LT')});
  }

  handleDescriptionChange = (event) => {
    const description = event.target.value;
    this.props.onChange({description});
  }

  render() {
    const {
      activity: { description, loggedAt },
      kind,
      color,
      classes,
    } = this.props;
    const shortDescription = (ismobile.phone && description.length > 19) ? 
      `${description.substring(0, 20)}...` : description;
    const formattedDescription = this.transformLink(description);
    return (
      <ExpansionPanel expanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <div className={classes.bar} style={{backgroundColor: color}} />
              <TimePicker
                value={moment(loggedAt, 'LT')}
                onChange={this.handleTimeChange}
              />
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {shortDescription}
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography type="title" className={classes.kind}>
            {kind}
          </Typography>
          <Input
            type="caption"
            value={formattedDescription}
            onChange={this.handleDescriptionChange}
          />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button
            raised
            dense
            color="accent"
            className={classes.button}
            onClick={this.props.cancelEditActivity}
          >
            CANCEL
          </Button>
          <Button
            raised
            dense
            color="accent"
            onClick={this.props.saveEditActivity}
          >
            SAVE
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}


export default withStyles(styles)(Activity);