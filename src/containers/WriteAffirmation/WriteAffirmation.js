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

// import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import './WriteAffirmation.css';

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
                text: 'Repeat the affirmation here...'
              }
            ]
          }
        ]
      }
    ]
  }
});

class WriteAffirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: initialValue
    };
  }

  componentDidMount = () => {
    
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

      //ADD OPTION TO CENTER TEXT
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
    // const affirmation = this.state.value.document.text;

    // const userID = 1;
    // const url = `https://mood-board-be.herokuapp.com//api/v1/users/${userID}/journal_entries?date=today`;

    // await this.props.patchJournalEntry(url, journal_entry);
  };

  onMarkClick = (e, type) => {
    e.preventDefault();
    const change = this.editor.toggleMark(type);

    this.onChange(change);
  };

  render() {
    const { primary_tone } = this.props.journal.
    let prompt;


    return (
      <div className="write-affirmation">
        <Logo />
        <h1 className="prompt">{prompt}</h1>
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

        <button className="save-prompt-btn" onClick={() => this.handleSubmit()}>
          save affirmation
        </button>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  // need to send affirmation to db
});

export default connect(
  null,
  mapDispatchToProps
)(WriteAffirmation);
