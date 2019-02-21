import React from 'react';
import { shallow } from 'enzyme';
import { TodayMood, mapStateToProps } from './TodayMood';

describe('TodayMood', () => {
  let journalMood = { entry_text: 'I am sad', tones: 'anger' };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodayMood journal={journalMood} />);
  });

  it('should render a snapshot with anger tone passed in', () => {
    let mockJournal = { entry_text: 'I am sad', tones: 'anger' };
    wrapper = shallow(<TodayMood journal={mockJournal} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a snapshot with sadness tone passed in', () => {
    let mockJournal = { entry_text: 'I am sad', tones: 'sadness' };
    wrapper = shallow(<TodayMood journal={mockJournal} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a snapshot with tentative tone passed in', () => {
    let mockJournal = { entry_text: 'I am sad', tones: 'tentative' };
    wrapper = shallow(<TodayMood journal={mockJournal} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a snapshot with fear tone passed in', () => {
    let mockJournal = { entry_text: 'I am sad', tones: 'fear' };
    wrapper = shallow(<TodayMood journal={mockJournal} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a snapshot with joy tone passed in', () => {
    let mockJournal = { entry_text: 'I am sad', tones: 'joy' };
    wrapper = shallow(<TodayMood journal={mockJournal} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a snapshot with analytical tone passed in', () => {
    let mockJournal = { entry_text: 'I am sad', tones: 'analytical' };
    wrapper = shallow(<TodayMood journal={mockJournal} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a snapshot with confident tone passed in', () => {
    let mockJournal = { entry_text: 'I am sad', tones: 'confident' };
    wrapper = shallow(<TodayMood journal={mockJournal} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should return a journal object', () => {
    const mockState = {
      journal: {
        entry_text: 'I am so sad.',
        tones: 'sadness'
      }
    };

    const expected = { entry_text: 'I am so sad.', tones: 'sadness' };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps.journal).toEqual(expected);
  });
});
