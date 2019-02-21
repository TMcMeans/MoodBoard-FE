import React, { Component, Fragment } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/feather/bold';
import { italic } from 'react-icons-kit/feather/italic';
import { list } from 'react-icons-kit/feather/list';
import { underline } from 'react-icons-kit/feather/underline';
import { plus } from 'react-icons-kit/feather/plus';
import { FormatToolbar } from '../../components/FormatToolbar/FormatToolbar.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';
import { getJournalEntry } from '../../thunks/getJournalEntry';
import { patchJournalEntry } from '../../thunks/patchJournalEntry';
import './Journal.css';

let initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'Start writing here...'
              }
            ]
          }
        ]
      }
    ]
  }
});

export class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: initialValue
    };
  }

  componentDidMount = async () => {
    const userID = 1;
    const url = `https://mood-board-be.herokuapp.com/api/v1/users/${userID}/journal_entries?date=today`;

    await this.props.getJournalEntry(url);

    const { entry_text } = await this.props.journal;

    if (entry_text.length) {
      initialValue = Value.fromJSON({
        document: {
          nodes: [
            {
              object: 'block',
              type: 'paragraph',
              nodes: [
                {
                  object: 'text',
                  leaves: [
                    {
                      text: entry_text
                    }
                  ]
                }
              ]
            }
          ]
        }
      });
    }

    this.setState({
      value: initialValue
    });
  };

  renderMark = props => {
    const { attributes, children } = props;
    switch (props.mark.type) {
      case 'bold': {
        return <strong {...attributes}>{children}</strong>;
      }
      case 'italic': {
        return <em {...attributes}>{children}</em>;
      }
      case 'list-item': {
        return <li {...attributes}>{children}</li>;
      }
      case 'underline': {
        return (
          <p {...attributes} className="underline">
            {children}
          </p>
        );
      }
      case 'heading-one': {
        return <h1 {...attributes}>{children}</h1>;
      }
      default: {
        return;
      }
    }
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  handleSubmit = async () => {
    const journal_entry = this.state.value.document.text;

    const userID = 1;
    const url = `https://mood-board-be.herokuapp.com//api/v1/users/${userID}/journal_entries?date=today`;

    await this.props.patchJournalEntry(url, journal_entry);
  };

  onMarkClick = (e, type) => {
    e.preventDefault();
    const change = this.editor.toggleMark(type);

    this.onChange(change);
  };

  render() {
    let today = new Date();
    let month = today.getMonth(); //January is 0!
    let day = today.getDate();
    let year = today.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }

    if (month === 0) {
      month = 'January';
    } else if (month === 1) {
      month = 'February';
    } else if (month === 2) {
      month = 'March';
    } else if (month === 3) {
      month = 'April';
    } else if (month === 4) {
      month = 'May';
    } else if (month === 5) {
      month = 'June';
    } else if (month === 6) {
      month = 'July';
    } else if (month === 7) {
      month = 'August';
    } else if (month === 8) {
      month = 'September';
    } else if (month === 9) {
      month = 'October';
    } else if (month === 10) {
      month = 'November';
    } else if (month === 11) {
      month = 'December';
    }

    today = month + ' ' + day + ', ' + year;

    return (
      <div className="journal">
        <Logo />
        <h1 className="date">{today}</h1>
        <Fragment>
          <FormatToolbar>
            <button
              onPointerDown={e => this.onMarkClick(e, 'bold')}
              className="tooltip-icon-button"
            >
              <Icon icon={bold} />
            </button>
            <button
              onPointerDown={e => this.onMarkClick(e, 'italic')}
              className="tooltip-icon-button"
            >
              <Icon icon={italic} />
            </button>
            <button
              onPointerDown={e => this.onMarkClick(e, 'list-item')}
              className="tooltip-icon-button"
            >
              <Icon icon={list} />
            </button>
            <button
              onPointerDown={e => this.onMarkClick(e, 'underline')}
              className="tooltip-icon-button"
            >
              <Icon icon={underline} />
            </button>
            <button
              onPointerDown={e => this.onMarkClick(e, 'heading-one')}
              className="tooltip-icon-button"
            >
              <Icon icon={plus} />
            </button>
          </FormatToolbar>

          <Editor
            className="editor"
            autoFocus={true}
            ref={editor => (this.editor = editor)}
            value={this.state.value}
            onChange={this.onChange}
            renderMark={this.renderMark}
          />
        </Fragment>
        <Link to="/todaymood">
          <button
            className="standard-btn light save-entry-btn"
            onClick={() => this.handleSubmit()}
          >
            save entry
          </button>
        </Link>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  journal: state.journal
});

export const mapDispatchToProps = dispatch => ({
  getJournalEntry: url => dispatch(getJournalEntry(url)),
  patchJournalEntry: (url, entry_text) =>
    dispatch(patchJournalEntry(url, entry_text))
});

Journal.propTypes = {
  getJournalEntry: PropTypes.func,
  journal: PropTypes.object,
  patchJournalEntry: PropTypes.func,
  value: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Journal);
