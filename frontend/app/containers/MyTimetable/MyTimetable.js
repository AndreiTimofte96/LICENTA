import React from 'react';
import Header from '../Header/Loadable';
import LoadingIndicator from '../../components/LoadingIndicator';
import Timetable from '../Timetable';
import CommentsSection from '../../components/CommentsSection';
import './style.scss';

export default class MyTimetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timetableData: {
        otherTTDates: [],
        currentTTDate: {},
        monthNorm: 0,
        tableHeader: [],
        tableData: [],
      },
      username: 'Olga',
      comments: [
        {
          username: 'Timi',
          message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
        },
        {
          username: 'Olga',
          message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
        },
      ],
    };
  }

  componentWillMount() {
    const { month, year } = this.props.match.params;
    this.props.getTimetableData(month, year);
  }

  componentDidUpdate(prevProps) {
    const _state = this.state;
    if (prevProps.isPending === true && this.props.isPending === false) {
      _state.timetableData = this.props.timetableData;
      this.setState(_state);
    }
  }

  render() {
    const {
      currentTTDate, tableHeader,
      tableData, monthNorm, otherTTDates,
    } = this.state.timetableData;
    const { username, comments } = this.state;
    const { isPending } = this.props;

    if (isPending) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <div>
        <Header />
        <div className="px-5 timetable-container">
          <Timetable
            data={{
              username,
              monthNorm,
            }}
            tableHeader={tableHeader}
            tableData={tableData}
            otherTTDates={otherTTDates}
            currentTTDate={currentTTDate}
          />
          <CommentsSection comments={comments} />
        </div>
      </div>
    );
  }
}
