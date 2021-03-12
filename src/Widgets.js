import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './Widgets.css'

export default function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle('The Six Morning Habits of High Performers', 'Six practices to get back on track')}
      {newsArticle('The Six Morning Habits of High Performers', 'Six practices to get back on track')}
      {newsArticle('The Six Morning Habits of High Performers', 'Six practices to get back on track')}
      {newsArticle('The Six Morning Habits of High Performers', 'Six practices to get back on track')}
      {newsArticle('The Six Morning Habits of High Performers', 'Six practices to get back on track')}
      {newsArticle('The Six Morning Habits of High Performers', 'Six practices to get back on track')}

    </div>
  )
}
