import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import BookList from './BookList.js';

const BookListContainer = props => <BookList {...props} />;

const mapStateToProps = state => ({
  isPlaying: getIsPlaying(state),
  playingSongId: getPlayingSongId(state),
  playlist: HISTORY_PLAYLIST,
  showHistory: getShowHistory(state),
  songs: getSongs(state),
});

export default connect(mapStateToProps, {
  navigateTo,
  playSong,
  toggleShowHistory,
})(HistoryContainer);
