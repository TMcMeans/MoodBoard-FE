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
import { Link } from 'react-router-dom';

import { prompts } from '../../helper/prompts';
import { postAffirmation } from '../../thunks/postAffirmation';
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
      value: initialValue,
      prompt: '',
    };
  }

  componentDidMount = () => {
    const { primary_tone } = this.props.journal.tones;
    const promptTone = prompts[primary_tone];
    const promptIndex = Math.round(Math.random() * (promptTone.length - 1));
    let prompt = promptTone[promptIndex];
    this.setState({ prompt })
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
    const affirmation_text = this.state.prompt;
    const userID = 1;
    const url = `https://mood-board-be.herokuapp.com/api/v1/users/${userID}/affirmations?date=today`;

    await this.props.postAffirmation(url, affirmation_text);
  };

  onMarkClick = (e, type) => {
    e.preventDefault();
    const change = this.editor.toggleMark(type);

    this.onChange(change);
  };

  render() {
    const { prompt } = this.state;

    return (
      <div className="write-affirmation">
        <Logo />
        <h2 className="prompt">
          PROMPT: 
          <br />
          {prompt}</h2>
        <Fragment>
          <FormatToolbar>
            <button
              onPointerDown={e => this.onMarkClick(e, 'bold')}
              className="prompt-tooltip-icon-button"
            >
              <Icon icon={bold} />
            </button>
            <button
              onPointerDown={e => this.onMarkClick(e, 'italic')}
              className="prompt-tooltip-icon-button"
            >
              <Icon icon={italic} />
            </button>
            <button
              onPointerDown={e => this.onMarkClick(e, 'list-item')}
              className="prompt-tooltip-icon-button"
            >
              <Icon icon={list} />
            </button>
            <button
              onPointerDown={e => this.onMarkClick(e, 'underline')}
              className="prompt-tooltip-icon-button"
            >
              <Icon icon={underline} />
            </button>
            <button
              onPointerDown={e => this.onMarkClick(e, 'heading-one')}
              className="prompt-tooltip-icon-button"
            >
              <Icon icon={plus} />
            </button>
          </FormatToolbar>

          <Editor
            className="prompt-editor"
            autoFocus={true}
            ref={editor => (this.editor = editor)}
            value={this.state.value}
            onChange={this.onChange}
            renderMark={this.renderMark}
          />
        </Fragment>
        <Link to="/home">
          <button className="save-prompt-btn" onClick={() => this.handleSubmit()}>
            save affirmation
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  journal: state.journal
})

const mapDispatchToProps = dispatch => ({
  postAffirmation: (url, affirmation_text) => dispatch(postAffirmation(url, affirmation_text)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteAffirmation);
