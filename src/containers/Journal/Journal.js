import React, { Component, Fragment } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';
import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/feather/bold';
import { italic } from 'react-icons-kit/feather/italic';
import { list } from 'react-icons-kit/feather/list';
import { underline } from 'react-icons-kit/feather/underline';
import { plus } from 'react-icons-kit/feather/plus';
import { FormatToolbar } from '../../components/FormatToolbar/FormatToolbar.js';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
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

class Journal extends Component {
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

    const { entry_text } = this.props.journal.attributes;
    //if there is an entry- display entry on page. Needs to be tested
    if (entry_text) {
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
                      text: this.props.journal.attributes.entry_text
                    }
                  ]
                }
              ]
            }
          ]
        }
      });
    }
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

      //NOT WORKING CHANGE TO CENTER ALIGN TEXT
      case 'underlined': {
        return (
          <p {...attributes} className="center-align">
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

  onSubmit = async e => {
    e.preventDefault();

    const journal_entry = this.state.value.document.text;

    const userID = 1;
    const url = `https://mood-board-be.herokuapp.com//api/v1/users/${userID}/journal_entries?date=today`;
    const response = await patchJournalEntry(url, journal_entry);

    //dispatch the saveJournalEntry action to update journal entry (with tone words) in global state tree
    console.log(response);
  };

  onMarkClick = (e, type) => {
    e.preventDefault();
    const change = this.editor.toggleMark(type);

    this.onChange(change);
  };

  render() {
    const dateText = 'June 16, 2018';
    return (
      <div className="journal">
        <Logo />
        <h1 className="date">{dateText}</h1>
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

        <Button text="save entry" onClick={e => this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  journal: state.journal,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getJournalEntry: url => dispatch(getJournalEntry(url)),
  patchJournalEntry: (url, entry_text) =>
    dispatch(patchJournalEntry(url, entry_text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Journal);
